import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Ensure JWT expiration is checked
      secretOrKey: 'secrect', // Replace with a secure secret
    });
  }

  async validate(payload: any) {
    // This is called if the JWT is valid
    return { userId: payload.sub, username: payload.username };
  }
}
