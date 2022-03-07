import React, { Component } from 'react'
import { BrowserRouter as Router,
    Route, 
    Redirect, 
    Switch } from 'react-router-dom';

import Index from '../Index'
import Book from '../Book';
import Photo from '../Photo';
import About from '../About';
import Journal from '../Journal';
export default class Home extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/home/book' component={Book}/>
                    <Route path='/home/photo' component={Photo}/>
                    <Route path='/home/about' component={About}/>
                    <Route path='/home/journal' component={Journal}/>
                </Switch>
                <Index></Index>
            </div>
        )
    }
}
