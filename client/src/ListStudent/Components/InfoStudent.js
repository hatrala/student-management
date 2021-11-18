/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import './InfoStudent.css';
import { Link } from 'react-router-dom';
import CallApi from "../../API/CallApi";

class InfoStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            student: {}
        }
    }

    dateTransform = (value) => {
    var s = value.split('-');
    if(s[0] <=31 && s[0] >=1) {return [s[0],s[1],s[2]].join('/');}
    else return [s[2],s[1],s[0]].join('/');
  }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            CallApi(`students/${id}`, 'GET', null).then(res => {
                var data = res.data
                this.setState({
                    student : data
                })
            })
        }
    }

    render() {
        var { student } = this.state;
        console.log(student.msv)
        return (
            <div className='container'>
                <h2>Thông tin chi tiết</h2>
                <fieldset className='info'>
                    <legend>
                        <b>Thông tin cá nhân</b>
                    </legend>
                    <section>
                        <div className='left'>
                            <img className='avatar' src='https://i.imgur.com/k88evbb.png' width='150px' height='150px' />
                        </div>
                        <div className='left ml-50'>
                            <p  >Mã sinh viên: </p>
                            <input  type='text' name='msv' value={student.msv} />
                            <p>Họ và tên: </p>
                            <input type='text' name='name' value={student.name }/>
                            <p>Ngày sinh:</p>
                            <input type='date' name='msv' value={student.date}/>
                            <p>Giới tính: Nam</p>
                            <p >SĐT: </p>
                            <input type='text' name='phone' value={student.phone}  />
                            <p>Địa chỉ E-mail khác: </p>
                            <input type='email' name='email_gg' value={ student.email}/>
                            <p>Địa chỉ: </p>
                            <input type='text' name='address' value={student.address} />
                        </div>
                    </section>                    
                </fieldset> <br/> <hr/>
                <fieldset className='gpa'>
                    <legend>
                        <b>Điểm số</b>
                    </legend>
                    <section>
                        <div className='ml-20'>
                            <p>Tổng số tín chỉ đã đăng ký:</p>
                            <input type='number' name='tc' value={student.tc} />
                            <p>Điểm trung bình :</p>
                            <input type='number' name='mark' value={student.mark} />
                        </div>
                    </section>   
                </fieldset> <br/>
                <Link to='/list-students' className='goback btn btn-danger'>
                    <span className="fa fa-arrow-left"></span> &nbsp; Quay lại
                </Link>
                <button type='submit' className='btn btn-primary'>
                    <span className='fa fa-save'></span> &nbsp; Ghi nhận
                </button> &nbsp;
                <button className='btn btn-danger'>
                    <span className='fa fa-window-close'></span> &nbsp; Hủy bỏ
                </button>
            </div>
        )
    }
}
export default InfoStudent;