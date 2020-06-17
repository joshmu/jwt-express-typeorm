import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { User } from '../entity/User'

export class CreateAdminUser1592354907485 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    let user = new User()
    user.username = 'admin'
    user.password = 'admin'
    user.hashPasword()
    user.role = 'ADMIN'
    const userRepository = getRepository(User)
    await userRepository.save(user)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
