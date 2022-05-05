import React,{Component} from "react";
import { Link } from "react-router-dom";

class Salary extends Component {
  constructor(props){
    super(props);
    this.state={
      filSalaryScale:0,
      filIdStaff:0,
      fillSalary:0
    };
    this.HandleIDChange=this.HandleIDChange.bind(this);
    this.HandleSalChange=this.HandleSalChange.bind(this);
    this.HandleSalScale=this.HandleSalScale.bind(this);
  }
  HandleIDChange(e){
    let target=e.target;
    let name =target.name;
    let value=target.value;
    this.setState({
      filIdStaff:value
    });
  }
  HandleSalChange(e){
    let target=e.target;
    let name =target.name;
    let value=target.value;
    this.setState({
      fillSalary:value
    });
  }
  HandleSalScale(e){
    let target=e.target;
    let name =target.name;
    let value=target.value;
    this.setState({
      filSalaryScale:value
    });
  }
  render(){
  let arr=null;//this.props.staff;
   console.log(this.state.filIdStaff +" ---"+this.state.fillSalary+" ---"+this.state.filSalaryScale)


  if(this.state.filIdStaff==0 && this.state.filSalaryScale!=0 && this.state.fillSalary!=0)
  {
    arr=this.props.staff.sort((a, b) => {
      let aSal=Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
      let bSal=Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
      if(this.state.filSalaryScale==1 && this.state.fillSalary==1)
      {
        return  Number(a.salaryScale)>Number(b.salaryScale) && aSal>bSal? -1:1;
      }
      else if(this.state.filSalaryScale==1 && this.state.fillSalary==2)
      {
        return  Number(a.salaryScale)>Number(b.salaryScale) && aSal<bSal? -1:1;
      }else if(this.state.filSalaryScale==1 && this.state.fillSalary==2)
      {
        return  Number(a.salaryScale)<Number(b.salaryScale) && aSal<bSal? -1:1;
      }
      else{
        return  Number(a.salaryScale)<Number(b.salaryScale) && aSal>bSal? -1:1;
      }
    })  
  }else if(this.state.filIdStaff==0 && this.state.filSalaryScale==0 && this.state.fillSalary!=0)
  {
    arr=this.props.staff.sort((a, b) => {
      let aSal=Number(Number(a.salaryScale)) * 3000000 + Number(a.overTime) * 200000;
      let bSal=Number(Number(b.salaryScale)) * 3000000 + Number(b.overTime) * 200000;
      if(this.state.fillSalary==1)
      {
        return  aSal>bSal? -1:1;
      }
      else
      {
        return  aSal<bSal? -1:1;
      }
    });
  }else if(this.state.filIdStaff!=0 && this.state.filSalaryScale==0 && this.state.fillSalary==0)
  {
    arr=this.props.staff.sort((a, b) => {
      if(this.state.filIdStaff==1)
      {
        return  a.id>b.id? -1:1;
      }
      else
      {
        return  a.id<b.id? -1:1;
      }
    });
  }else if(this.state.filIdStaff!=0 && this.state.filSalaryScale!=0 && this.state.fillSalary==0)
  {
    arr=this.props.staff.sort((a, b) => {
      if(this.state.filSalaryScale==1 && this.state.filIdStaff==1)
      {
        return  Number(a.salaryScale)>Number(b.salaryScale) && a.id>b.id? -1:1;
      }
      else if(this.state.filSalaryScale==1 && this.state.filIdStaff==2)
      {
        return  Number(a.salaryScale)>Number(b.salaryScale) && a.id<b.id? -1:1;
      }
      else if(this.state.filSalaryScale==2 && this.state.filIdStaff==2)
      {
        return  Number(a.salaryScale)<Number(b.salaryScale) && a.id<b.id? -1:1;
      }
      else{
        return  Number(a.salaryScale)<Number(b.salaryScale) && a.id>b.id? -1:1;
      }
    })  
  }else if(this.state.filIdStaff!=0 && this.state.filSalaryScale!=0 && this.state.fillSalary!=0)
  {
    if(this.state.filIdStaff==1 && this.state.filSalaryScale==1 && this.state.fillSalary==1)
    {
      arr=this.props.staff.sort((a, b) => {
        let aSal=Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
        let bSal=Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
        return  Number(a.salaryScale)>Number(b.salaryScale) && a.id>b.id && aSal>bSal? -1:1;
      });
    }else if(this.state.filIdStaff==1 && this.state.filSalaryScale==2 && this.state.fillSalary==1)
    {
      arr=this.props.staff.sort((a, b) => {
        let aSal=Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
        let bSal=Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
        return  Number(a.salaryScale)<Number(b.salaryScale) && a.id>b.id && aSal>bSal? -1:1;
      });
    }else if(this.state.filIdStaff==1 && this.state.filSalaryScale==1 && this.state.fillSalary==2)
    {
      arr=this.props.staff.sort((a, b) => {
        let aSal=Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
        let bSal=Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
        return  Number(a.salaryScale)>Number(b.salaryScale) && a.id>b.id && aSal<bSal? -1:1;
      });
    }else if(this.state.filIdStaff==1 && this.state.filSalaryScale==2 && this.state.fillSalary==2)
    {
      arr=this.props.staff.sort((a, b) => {
        let aSal=Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
        let bSal=Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
        return  Number(a.salaryScale)<Number(b.salaryScale) && a.id>b.id && aSal<bSal? -1:1;
      });
    }
    else if(this.state.filIdStaff==2 && this.state.filSalaryScale==1 && this.state.fillSalary==1)
    {
      arr=this.props.staff.sort((a, b) => {
        let aSal=Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
        let bSal=Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
        return  Number(a.salaryScale)>Number(b.salaryScale) && a.id<b.id && aSal>bSal? -1:1;
      });
    }
    else if(this.state.filIdStaff==2 && this.state.filSalaryScale==2 && this.state.fillSalary==1)
    {
      arr=this.props.staff.sort((a, b) => {
        let aSal=Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
        let bSal=Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
        return  Number(a.salaryScale)<Number(b.salaryScale) && a.id<b.id && aSal>bSal? -1:1;
      });
    }else if(this.state.filIdStaff==2 && this.state.filSalaryScale==2 && this.state.fillSalary==2)
    {
      arr=this.props.staff.sort((a, b) => {
        let aSal=Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
        let bSal=Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
        return  Number(a.salaryScale)<Number(b.salaryScale) && a.id<b.id && aSal<bSal? -1:1;
      });
    }else if(this.state.filIdStaff==2 && this.state.filSalaryScale==1 && this.state.fillSalary==2)
    {
      arr=this.props.staff.sort((a, b) => {
        let aSal=Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
        let bSal=Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
        return  Number(a.salaryScale)>Number(b.salaryScale) && a.id<b.id && aSal<bSal? -1:1;
      });
    }
    // 

  }else if(this.state.filIdStaff==0 && this.state.filSalaryScale!=0 && this.state.fillSalary==0)
  {
    arr=this.props.staff.sort((a, b) => {
      if(this.state.filSalaryScale==1)
      {
        return  Number(a.salaryScale)>Number(b.salaryScale)? -1:1;
      }
      else
      {
        return  Number(a.salaryScale)<Number(b.salaryScale)? -1:1;
      }
    });
  }else if(this.state.filIdStaff!=0 && this.state.filSalaryScale==0 && this.state.fillSalary!=0)
  {
    arr=this.props.staff.sort((a, b) => {
      let aSal=Number(a.salaryScale) * 3000000 + Number(a.overTime) * 200000;
      let bSal=Number(b.salaryScale) * 3000000 + Number(b.overTime) * 200000;
      if(this.state.filIdStaff==1 && this.state.fillSalary==1)
      {
        return  a.id>b.id && aSal>bSal? -1:1;
      }
      else if(this.state.filIdStaff==1 && this.state.fillSalary==2)
      {
        return  a.id>b.id && aSal<bSal? -1:1;
      }
      else{
        return  a.id<b.id && aSal>bSal? -1:1;
      }
    })  
  }else{
    arr=this.props.staff.sort((a, b) => {
     
        return  a.id<b.id?-1:1;
    
    })  
  }
    const sal = arr.map((value) => {
    return (
      <div key={value.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{value.name}</h5>
            <p className="card-text">Mã nhân viên: {value.id}</p>
            <p className="card-text">Hệ số lương: {value.salaryScale}</p>
            <p className="card-text">Số ngày làm thêm: {value.overTime}</p>
          </div>
          <div className="card-footer text-muted text-center">
            Lương: {Number(value.salaryScale) * 3000000 + Number(value.overTime) * 200000}
          </div>
        </div>
      </div>
    );
  });
  return(
    <React.Fragment>
        <div className="row">
        <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item mt-2 ml-2 mb-2">
                  <Link to="/">
                    Nhân viên
                  </Link>
                </li>
                <li className="breadcrumb-item mt-2 mb-2 active" aria-current="page">
                  Bảng Lương
                </li>
              </ol>
            </nav>    
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <label>ID</label>
            <select name="fil-id" value={this.state.filIdStaff} onChange={this.HandleIDChange}>
              <option value={0}>Mặc định</option>
              <option value={1}>Cao đến thấp</option>
              <option value={2}>Thấp đến cao</option>
            </select>
          </div>
          <div className="col-4">
            <label>Mức lương</label>
          <select name="fil-salary" value={this.state.fillSalary} onChange={this.HandleSalChange}>
              <option value={0}>Mặc định</option>
              <option value={1}>Cao đến thấp</option>
              <option value={2}>Thấp đến cao</option>
            </select>
          </div>
          <div className="col-4">
          <label>Hệ số lương</label>
          <select name="fil-salaryScale" value={this.state.salaryScale} onChange={this.HandleSalScale}>
              <option value={0}>Mặc định</option>
              <option value={1}>Cao đến thấp</option>
              <option value={2}>Thấp đến cao</option>
            </select>
          </div>
        </div>
        <div className="row">{sal}</div>
    </React.Fragment>
  )};
};
export default Salary;
