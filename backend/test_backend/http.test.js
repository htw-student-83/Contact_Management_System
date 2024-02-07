import { test } from 'vitest';
const createContact = require('../controller/contactcontroller'); // Import your asynchronous function

test('createContact should return a success message', async () => {
    const req = {
        body: {
            Firstname: 'John',
            Lastname: 'Doe',
            Mobile: '1234567890'
        }
    };

    // Mock response object
    const res = {
        json: () => {},
        status: () => {}
    };

    // Mock Contact model
    const Contact = {
        create: () => Promise.resolve({})
    };

    // Pass the mocked Contact model to your function
    await createContact(req, res, Contact);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ msg: 'New contact added.' });
});
