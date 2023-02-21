import 'reflect-metadata';
import '../../shared/index';
import { describe, expect, it } from "vitest";
import { createBrandController } from './createBrand.controller';

describe('Deve executar ações do model de Produto', ()=>{
    it('Deve criar produto', async ()=>{
        const brandController = new createBrandController().handle({
            name: 'Skol',
            category: 'Latinha',
            price: '4,00',
            qntdade: 3,
        })
        await expect(brandController)
    });
});
