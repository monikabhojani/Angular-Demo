import { InMemoryDbService } from 'angular-in-memory-web-api';


export class TestData implements InMemoryDbService{

    createDb(){
        let bookData=[
            {id:1, title:'title1', author:'authorname1', category:'category1'},
            {id:2, title:'title2', author:'authorname2', category:'category2'},
            {id:3, title:'title3', author:'authorname3', category:'category3'},
        ];
        return {bookData};
    }

}