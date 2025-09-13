import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany
} from "typeorm";
import { confession_father } from "./ConfessionFather.js";
import { GENDER, ROLE } from "../types/entity.js";

@Entity()
export class student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column() first_name!: string;
  @Column() father_name!: string;
  @Column() grand_father_name!: string;
  @Column() christian_name!: string;
  @Column({unique:true}) email!:string;
  @Column() password!:string;
  @Column({ type: "enum", enum: GENDER }) gender!: GENDER;
  @Column({length:15,name:"phoneNumber"}) phone_number!: string;
  @Column() id_card_image_path!: string;
  @Column({nullable:true}) barcode!: string;
  
  @Column({ type: "enum", enum: ROLE,default:"student" }) role!: ROLE;
  @Column({ default: false }) is_verified!: boolean;
  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" }) created_at!: Date;

  @ManyToOne(() => confession_father, (father: confession_father) => father.students, {nullable:true, onDelete: 'SET NULL' })
  confession_father!: confession_father;
}
