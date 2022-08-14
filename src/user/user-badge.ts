import { Badge } from '@badge/badge.entity';
import {
  PrimaryGeneratedColumn, Entity, ManyToOne,
} from 'typeorm';
import { User } from '@user/user.entity';

@Entity()
export class UserToBadge {
  @PrimaryGeneratedColumn()
    id: number;

  @ManyToOne((type) => User, { onDelete: 'CASCADE' })
    badge: Badge;
  
  @ManyToOne((type) => User, { onDelete: 'CASCADE' })
    user: User;
}