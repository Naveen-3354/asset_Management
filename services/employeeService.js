const express = require("express")
const app = express.Router()
const Employee = require("../models/employee")


app.get('/', async (req, res) => {
    try {
        const employees = await Employee.findAll();
console.log(employees);

        res.render('employees/employeeList', {
            employees
        });
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
});


app.get('/create', (req, res) => {
    res.render('employees/newEmployee', {title:"Create"});
});

app.get('/edit/:id',async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (employee) {
            res.render('employees/newEmployee', { employee, title:"Edit" });
        } else {
            res.status(404).render('error', { message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
});

app.post('/', async (req, res) => {
    try {
        console.log(req.body);

        await Employee.create(req.body);
        res.redirect('/employees');
    } catch (error) {
        res.status(400).render('error', { message: error.message });
    }
});

app.post('/:id/edit', async (req, res) => {
    try {
        const [updated] = await Employee.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            res.redirect('/employees');
        } else {
            res.status(404).render('error', { message: 'Employee not found' });
        }
    } catch (error) {
        res.status(400).render('error', { message: error.message });
    }
});

app.post('/:id/delete', async (req, res) => {
    try {
        const deleted = await Employee.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.redirect('/employees');
        } else {
            res.status(404).render('error', { message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
});



module.exports = app;