import 'reflect-metadata';
import '../../shared/index';
import { describe, expect, it } from "vitest";
import { CategoryController } from "./Category.controller";

describe('Deve executar ações do model de Categoria', ()=>{
    it('deve criar categoria', async ()=>{
        const controller = new CategoryController().handle('latão');

        await expect(controller).resolves;
    });

    it('Deve Impedir de criar categoria', async ()=>{
        const controller = new CategoryController().handle('latão');

        expect(controller).resolves;
    });
});
