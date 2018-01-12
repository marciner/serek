import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'SearchPipe',
})

export class SearchPipe implements PipeTransform{
    transform(pipeData, pipeModifier){
      if(pipeModifier){
        return pipeData.filter((eachItem) => {
          return eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase());
        });

      }else{
        return pipeData;
      }
  
    }
   
 }