import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const data = {
    "items":{
      "item":{
        "id":"001",
        "battters":{
          "batter":[
            {
              "id":"1001",
              "type":"regular"
            },
            {
              "id":"1002",
              "type":"unreg3ular"
            },
            {
              "id":"1003",
              "type":"unre4gular"
            },
            {
              "id":"1004",
              "type":"unr2egular"
            },
            {
              "id":"1005",
              "type":"un1regular"
            }
          ]
        },
        "otherdata":"otherdata"
      }
    }
  }


  const DisplayData=data.items.item.battters.batter.map(
    (info)=>{
        return(
            <tr>
                <td>{info.id}</td>
                <td>{info.type}</td>
            </tr>
        )
    }
)
  
  return (
    <div>
    <table class="table table-striped">
        <thead>
            <tr>
            <th>id</th>
            <th>type</th>
            </tr>
        </thead>
        <tbody>
         
            
          {DisplayData}
            
        </tbody>
    </table>
     
</div>
  );
}

export default App;
