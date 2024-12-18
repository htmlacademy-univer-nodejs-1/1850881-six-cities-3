import {DocumentType} from '@typegoose/typegoose';
import CreateUserDto from './dto/create-user.dto.js';
import {UserEntity} from './user.entity.js';

export interface UserServiceInterface {
    create(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity> | null>;

    findByEmail(email: string): Promise<DocumentType<UserEntity> | null>;

    // sorry, I will fix it later :)
    findOrCreate(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity> | null>;
}
