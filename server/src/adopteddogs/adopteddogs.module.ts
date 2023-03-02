import { Module } from '@nestjs/common';
import { AdopteddogsService } from './adopteddogs.service';
import { AdopteddogsResolver } from './adopteddogs.resolver';

@Module({
  providers: [AdopteddogsService, AdopteddogsResolver]
})
export class AdopteddogsModule {}
