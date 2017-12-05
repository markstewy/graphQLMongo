var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/college'); 
var Salary = require('./models/salaryModel');

import { makeExecutableSchema } from 'graphql-tools';


const typeDefs = `

    type Query {
        getUsers(paid: Boolean, name: String, zipCode: Int): [User]
        getTodos: [Todo]
        getSalaries(State: String, City: String, Salary: String): [Salary]
    }

    type User {
        _id: ID!
        todos: [Todo]
        name: String
        zipCode: Int
        paid: Boolean
    }

    type Todo {
        _id: ID!
        item: String
        completed: Boolean
    }

    type Salary {
        _id : ID
        State : String 
        City : String 
        # OccupationArea : String
        Salary : String
    }

`

const resolvers = {
    Query: {
        getUsers: function(_, args, context) {
            console.log(args);
            return fakeUsers;
        },
        getTodos: function() {
            return fakeTodos;
        },
        getSalaries: function(_, args, context) {
            console.log(args);
            return Salary.find(args)
        }
    }
}



// type Cost { 
//     _id : String 
//     schoolId : Int 
//     schoolName : String 
//     expenseItem : String 
//     2016 : Int 
//     2015 : Int 
//     2014 : Int 
//     2013 : Int 
//     2012 : Int 
//     2011 : Int 
//     2010 : Int 
//     2009 : Int 
//     2008 : Int 
//     2007 : Int 
//     2006 : Int 
//     2005 : Int 
//     2004 : Int 
//     2003 : Int 
//     2002 : Int
// }


    const fakeUsers = [{
        _id: '55',
        // todos: {
        //     _id: '555555',
        //     item: 'wash dishes',
        //     completed: true,
        // },
        name: 'mark',
        paid: true,
        zipCode: 1234,
        },
        {
        _id: '66',
        // todos: {
        //     _id: '555555',
        //     item: 'wash dishes',
        //     completed: true,
        // },
        name: 'markasdfasdf',
        paid: true,
        zipCode: 12323412344,
        }]
    
    
    
    
    const fakeTodos = [{
            userId: '55',
            item: 'wash dishes',
            completed: true,
        },
        {
            userId: '55',
            item: 'wash dishes',
            completed: true,
        },
        {
            userIid: '555555',
            item: 'wash dishes',
            completed: true,
        }
    ]

    
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

