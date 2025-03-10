import { Model } from "@dzcode.io/models/dist/_base";
import { ProjectEntity } from "@dzcode.io/models/dist/project";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";

import { GeneralResponseDto } from "../app/types";

export class GetProjectsResponseDto extends GeneralResponseDto {
  @ValidateNested({ each: true })
  @Type(() => ProjectEntity)
  projects!: Model<ProjectEntity, "repositories">[];
}
