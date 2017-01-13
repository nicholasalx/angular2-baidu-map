import { Component } from '@angular/core';

@Component({
    selector: 'demo',
    template: `
        <menu></menu>
        <div class="page-content">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
    :host {
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #fafafa;
    }
    .page-content {
        width: 100%;
        display: flex;
        flex-grow: 5;
        padding: 30px 10px 10px 10px;
    }
    >>> code {
        font-style: italic;
        font-weight: bold;
        color: gray;
    }
    >>> p {
        line-height: 25px;
        margin-top: 3px;
        font-family: 'Noto Sans','PT Sans','Open Sans','Helvetica Neue',Arial,Helvetica,sans-serif;
    }
    >>> .page-title {
        text-align: center;
        margin-bottom: 15px;
    }

    >>> .section {
        display: block;
        margin-bottom: 20px;
    }

    >>> .section h1 {
        margin-bottom: 10px;
    }

    >>> .snippet {
        padding: 10px;
        background-color: #f5f5f5;
        border: 1px solid #cccccc;
    }

    >>> .snippet code {
        font-style: normal;
        font-weight: normal;
        color: #fff;
    }

    >>> blockquote {
        margin: 10px 0 10px 0;
        border-left: 5px solid gray;
        padding-left: 10px;
    }

    >>> .matrix {
        width: 100%;
        border-collapse: collapse;
        margin: 10px 0 10px 0;
    }

    >>> .matrix td,
    >>> .matrix th {
        border:1px solid #98bf21;
        padding:3px 7px 2px 7px;
    }

    >>> .matrix th {
        text-align: left;
        padding-top: 5px;
        padding-bottom: 4px;
        background-color: #A7C942;
        color: #ffffff;
    }

    >>> .matrix tbody > tr {
        line-height: 25px; 
    }

    >>> .matrix .label {
        display: inline-block;
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 2px;
        background-color: #5bc0de;
        color: #fff;
        line-height: normal;
    }

    >>> .matrix .label.required {
        background-color: #f04124;
    }
    `]
})
export class Demo { }