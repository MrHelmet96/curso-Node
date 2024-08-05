import {emailTemplate} from "../../src/js-foundation/01-template"

describe('js-foundation/01-template.ts', () => {

    it('should return email template', () => {
        expect(emailTemplate).toContain('Hi');
    });

    test('emailTemplate should contain {{name}} and {{orderID}}', () => {
        //una opcion posible
        expect(emailTemplate).toContain('{{name}}');
        expect(emailTemplate).toContain('{{orderID}}');

        //otra opcion disponible
        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{orderID}}/);
    });
});

