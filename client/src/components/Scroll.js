import React, { Component } from 'react';
import '../components/css/Scroll.css'

// list of items
export const list = [
    { date: 'SEP 19' },
    { date: 'SEP 20' },
    { date: 'SEP 21' },
    { date: 'SEP 22' },
    { date: 'SEP 23' },
    { date: 'SEP 24' },
    { date: 'SEP 25' },
    { date: 'SEP 26' },
    { date: 'SEP 27' },
    { date: 'SEP 28' },
    { date: 'SEP 29' },
    { date: 'SEP 30' }
];

// One item component
// selected prop will be passed
export const MenuItem = ({ text, selected }) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
        const { date } = el;

        return <MenuItem text={date} key={date} selected={selected} />;
    });


export const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};


export const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
export const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

export const selected = 'SEP 26';