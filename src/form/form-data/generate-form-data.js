import mainForm from './main-form.json';
import websiteForm from './website-form.json';
import productsForm from './products-form.json';
import locationsForm from './retail-form.json';
import serviceForm from './customer-service.json';
import generalForm from './general.json';

const generateFormData = (inputs) => {
    switch (inputs['feedback-topic']) {
        case 'website':
            return [...mainForm, ...websiteForm];
        case 'products':
            return [...mainForm, ...productsForm];
        case 'locations':
            return [...mainForm, ...locationsForm];
        case 'service':
            return [...mainForm, ...serviceForm];
        case 'general':
        default:
            return [...mainForm, ...generalForm];
    }
}

export default generateFormData;