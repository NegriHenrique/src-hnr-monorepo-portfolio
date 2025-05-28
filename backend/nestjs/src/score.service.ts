import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from './score.entity';
import { User } from './user.entity';

@Injectable()
export class ScoreService {
  constructor(
    @InjectRepository(Score)
    private scoreRepository: Repository<Score>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(value: number, userId: number): Promise<Score> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) throw new Error('Usuário não encontrado');
    const score = this.scoreRepository.create({ value, user });
    return this.scoreRepository.save(score);
  }

  findAll(): Promise<Score[]> {
    return this.scoreRepository.find({ order: { createdAt: 'DESC' } });
  }
}
