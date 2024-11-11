import { expect } from 'chai';
import sinon from "sinon";
import * as math from '../math.js';

describe('Math functions',()=>{
    describe('add',()=> {
        it('should add two numbers',()=> {
            const result = math.add(2,3);
            expect(result).to.equal(5);
        });
    });

    describe('subtract',()=> {
        it('should subtract two numbers',()=> {
            const result = math.subtract(6,3);
            expect(result).to.equal(3);
        });
    });

    describe('calculate',()=> {
        it('should call add when calculating',()=> {
            const addStub = sinon.stub().returns(5);

            const result = math.calculate(2,3,addStub);

            expect(addStub.calledOnce).to.be.true;
            expect(result).to.equal(5);
        })
    })

});



   


