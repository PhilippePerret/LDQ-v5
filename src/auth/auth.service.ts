import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(email: string, password: string): Promise<{ accessToken: string }> {
    const user = await this.usersService.create(email, password);
    return { accessToken: this.signToken(user.id, user.email) };
  }

  async login(email: string, password: string): Promise<{ accessToken: string }> {
    const user = await this.usersService.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return { accessToken: this.signToken(user.id, user.email) };
  }

  private signToken(sub: string, email: string): string {
    return this.jwtService.sign({ sub, email });
  }
}
