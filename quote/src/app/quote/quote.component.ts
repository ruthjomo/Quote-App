import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[] = [
    new Quote(1,'You can waste your lives drawing lines. Or you can live your life crossing them.' ,'Shonda Rhimes ',"Ruth",new Date(2020,6,20),0,0),
    new Quote(2, '“You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.' , ' George Lorimer', "Ruth",new Date(2020,6,20),0,0),
    new Quote(3, 'Cheap is always expensive.' , 'Einstein', "Ruth",new Date(2020,6,2100),0,0),
    new Quote(4, 'Never die on your knees,stand tall','Bill Cosby',"Ruth",new Date(2020,6,20),0,0),
    new Quote(5, 'Hapiness is free to a caring soul but expensive to a greedy one.', 'Ruth Jomo', "Ruth",new Date(2020,6,20),0,0),
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
    quote.postingDate= new Date()
    
    if (quote.author === ''|| quote.author === '' || quote.blogger === ''){
      alert('Kindly,all fields are required!')
    }else{
      alert(' Yaay! Your Quote has been added')
    this.quotes.push(quote);
    
  }
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    deleteQuote(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure to continue with delete`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}