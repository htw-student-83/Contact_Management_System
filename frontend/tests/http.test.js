import { createContact } from '/Contact_Management_System/backend/controller/contactcontroller';

jest.mock('/Contact_Management_System/backend/model/contact');

import { Contact } from '/Contact_Management_System/backend/model/contact';

const req = {
    body: {
        Firstname: 'John',
        Lastname: 'Smith',
        Mobile: '01721234567'
    }
};

const req2 = {
    body: {
        Firstname: 'John',
        Lastname: 'Smith',
        Mobile: '01711234567'
    }
};

const req3 = {
    body: {
        Firstname: 'John',
        Lastname: 'Smith',
        Mobile: '0171234567'
    }
};

const req4 = {
    body: {
        Firstname: 'John',
        Lastname: 'S1mith',
        Mobile: '01721234567'
    }
};

const req5 = {
    body: {
        Firstname: 'John#',
        Lastname: 'Smith',
        Mobile: '0172123456k7'
    }
};

const res = {
    json: jest.fn().mockReturnValue({}),
    status: jest.fn().mockReturnThis()
};

describe('createContact', () =>{

    it('should return a successfully message', async () => {
        await contact.createContact(req, res);
        expect(res.status()).toHaveBeenCalledWith(201)
        expect(res.json()).toHaveBeenCalledWith({msg: "New contact added."});
    })

    it('should return a faild message', async () => {
        await Contact.createContact(req2, res);
        expect(res.status()).toHaveBeenCalledWith(400)
        expect(res.json()).toHaveBeenCalledWith({msg: "New contact didn't added "});
    })

    it('should return a faild message', async () => {
        await Contact.createContact(req3, res);
        expect(res.status()).toHaveBeenCalledWith(400)
        expect(res.json()).toHaveBeenCalledWith({msg: "New contact didn't added "});
    })

    it('should return a faild message', async () => {
        await Contact.createContact(req4, res);
        expect(res.status()).toHaveBeenCalledWith(400)
        expect(res.json()).toHaveBeenCalledWith({msg: "New contact didn't added "});
    })

    it('should return a faild message', async () => {
        await Contact.createContact(req5, res);
        expect(res.status()).toHaveBeenCalledWith(400)
        expect(res.json()).toHaveBeenCalledWith({msg: "New contact didn't added "});
    })

})