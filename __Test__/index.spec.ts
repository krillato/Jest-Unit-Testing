import {CheckBills} from "../index"
import MockAdapter from "axios-mock-adapter";
import axios from 'axios'

describe('Price Shabu come 4 free 1',()=>{
    let mock = new MockAdapter(axios);
    beforeEach(()=>{
        mock.reset();
    })
     it("should get request", async ()=>{
        //arrange
        mock.onGet("/person").reply(200,{
            statusCode:1,
            status:'success',
            msg:'',
            data:[
                {
                    id:1,
                    person: 5,
                }
            ],
          
        });
        const expectResult = 5
    //action
    const result = await axios.get("/person")
    // assert 
    expect(result.data.data[0].person).toBe(expectResult)
    })

    it('should Post request',async()=>{ 
        const mockData = {
            id:1,
            person: 5,
            charge: 10,
            price: 340,
           }
        mock.onPost("/add-person",{
            id:1,
            person:5,
        }).reply(200,{
            statusCode:1,
            status:'success',
            msg:'',
            data:[
                mockData
            ],
        })
        //arrange
        const expectedResult = 1;
         //action
         const result = await axios.post("/add-person",{  
            id:1,
            person: 5,
        });
         //assert
        expect(result.data.statusCode).toBe(expectedResult);
    }) 

  

    test.each([
            {
                person:1,
                expectedResult:374
            },
            {
                person:2,
                expectedResult:748
            },{
                person:3,
                expectedResult:1122
            },{
                person:4,
                expectedResult:1122
            },{
                person:5,
                
                expectedResult:1870
            },{
                person:6,
                expectedResult:2244
            },{
                person:7,
                expectedResult:2618
            },{
                person:8,
                expectedResult:2244
            }
        ])('Test Pay ', ({person, expectedResult}) => {
            expect(CheckBills(person).pay).toBe(expectedResult);
          });

})
