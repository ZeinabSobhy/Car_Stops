import React , {useState , useEffect , useContext} from 'react';
import {FormattedMessage} from "react-intl";
import FormControl from '@material-ui/core/FormControl';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {FormContext} from "../../context/FormContext";
import {postCarRequest} from "../../api/carsDetails";
import {CarContext} from "../../context/CarContext";
import './form.scss';
import {LocalizationContext} from "../../context/LocalizationContext";


const Form = props => {
    const [cars] = useContext(CarContext)
    const [makers, setMakers] = useState([])
    const [maker , setMaker] = useState("Please Select A Maker")
    const [models,setModels] = useState([])
    const [item , setItem] = useState("Please Select A Modal");
    const [error , setError] = useState({maker:false , model:false , fullName:false , phone:false})
    const [phone , setPhone] = useState(null);
    const [name , setName] = useState(null);
    const [formIsValid , setFormIsValid] = useState(null);
    const [sent , handleSent] = useContext(FormContext);
    const [locale , setLocale] = useContext(LocalizationContext)
    useEffect(() =>  {
        const keys = [];
        cars?.map((c) =>  {
            keys.push(c.Make)
        })
        setMakers(keys)
        console.log("Makers",makers)
    },[cars])
    useEffect(()=> {
        if ( item && phone && name) {
            setFormIsValid(true)
        }else{
            setFormIsValid(null)
        }
    } , [maker , item , phone , name ])
    const sendRequest = (value) =>  handleSent(value);

    const errorMessage = msg =>   {
        return (
            <div className="error_div">
                <p>
                    {msg}
                </p>
            </div>
        )
    }
    const handleChangeMaker = (event) =>  {
        if(event.type===   "blur") {
            event.target.value ===   "Acura" ? setError({...error , maker:true}):setError({...error , maker:false})
        }
        const make = event.target.value;
        make ===    null ? setError({...error , maker:true}):setError({...error , maker:false})
        setMaker(make);
    };
    const handleChangeModel = event =>  {
        const model_item = event.target.value;
        setItem(model_item);
        !model_item ? setError({...error , model:true}):setError({...error , model:false})
        console.log("ITEM",item)
    };
    useEffect(()=> {
        const model = cars?.filter(c =>  c.Make ===   maker)
        setModels(model[0]?.Models)
        console.log("model" , models);
    },[maker]);
    const handleSubmit = (event) =>  {
        event.preventDefault();
        if(formIsValid && !error.fullName && !error.phone) {
            handlePostRequest({Make:maker , Model:item , PhoneNumber:phone, FullName:name})
        }else {
            setFormIsValid(false);
        }
    };
    const handlePostRequest = (body) => {
        sendRequest(true);
        postCarRequest(body).then((res) => {
            sendRequest(true);

        }, error => {
            sendRequest(null);

        })
    };
    const handleChangeFullName = event =>  {
        const fullName = event.target.value;

        if(fullName=== "" ||   fullName===   null ||  /^\d+$/.test(fullName)) {
            setError({...error , fullName:true})
            setFormIsValid(false)

        }else {
            setError({...error , fullName:false})
        }
        setName(fullName);
    };
    const handleChangePhone = event =>  {
        const num = event.target.value;
           if ( num=== "" || num ===   null ) {
               setError({...error , phone:true})
              setFormIsValid(false)
           }
        else {
               setError({...error , phone:false})

           }
        setPhone(num);
    };

return(
    <div className="form_div">
        <form autoComplete={false} onSubmit={(event)=> {handleSubmit(event)}}>
            {formIsValid==null || formIsValid==true ? null :  <div className="error_div" style={{justifyContent:'flex-start'}}>
                <p className="error_div_msg" style={{ marginInline:'1rem'}}>
                    <FormattedMessage id="validation.allFields"  />
                </p>
            </div>}
           <h4> <FormattedMessage id="startToday.formSection.headline" /></h4>
            <FormControl>
                <label className="form_div_label" >
                    <FormattedMessage id="startToday.formSection.firstLabel" />
                </label>
                <select  style={error.maker || formIsValid == false ? { border: 'solid 1px #ec1c24', backgroundColor: 'rgba(236, 28, 36, 0.04)'}:null}
                         className={locale == "en" ? "form_div_ele form_div_selectEn" : "form_div_ele form_div_selectAr"} value={maker} name={"car_make"} onBlur={(event) =>  {handleChangeMaker(event)}}  id={"car_make"} onChange={(event)=> {handleChangeMaker(event)}}>
                    <option value="" disabled selected>
                        {locale == "en" ? "SELECT A MAKER" : "إختار صانع"}
                    </option>
                    {makers?.map((m) => {
                        return(
                            <option onClick={(e)=>{handleChangeMaker(e)}} value={m}>{m}</option>
                        )
                    })
                    }
                </select>
                {error.maker ? errorMessage(<FormattedMessage id="validation.makeValidation" />):null}
            </FormControl>
            <FormControl>
                <label  className="form_div_label" for={"car_model"}>
                    <FormattedMessage id="startToday.formSection.secondLabel" />
                </label>
                <select style={error.model || formIsValid == false  ? { border: 'solid 1px #ec1c24',
                    backgroundColor: 'rgba(236, 28, 36, 0.04)'}:null }  className={locale == "en" ? "form_div_ele form_div_selectEn" : "form_div_ele form_div_selectAr"}  id={"car_model"} value={item} onChange={(event)=> {handleChangeModel(event)}}>
                    <option value="" disabled selected>
                        {locale == "en" ? "SELECT A MODEL" : "إختار طراز"}
                    </option>
                    {models?.map((m) => {
                        return(
                            <option onClick={(e) => {handleChangeModel(e)}} value={m}>{m}</option>
                        )
                    })
                    }
                </select>
                {error.model ? errorMessage( <FormattedMessage id="validation.modelValidation" />):null}
            </FormControl>
            <h4> <FormattedMessage id="startToday.formSection.headline2" /></h4>
            <FormControl>
                <label className="form_div_label" htmlFor={"car_model"}>
                    <FormattedMessage id="startToday.formSection.thirdLabel" />
                </label>
                <input value={name} type="text" name="full_name" style={error.fullName || formIsValid==false  ? { border: 'solid 1px #ec1c24',
                    backgroundColor: 'rgba(236, 28, 36, 0.04)'}:null  }  className="form_div_ele" id="full_name" onChange={(e)=>{handleChangeFullName(e)}} onBlur={(e)=>{handleChangeFullName(e)}} />
                {error.fullName ? errorMessage(<FormattedMessage id="validation.name" />):null}
            </FormControl>
            <FormControl>
                <label className="form_div_label" htmlFor={"phone"}>
                    <FormattedMessage id="startToday.formSection.fourthLabel" />
                </label>
                <input value={phone} type="number" name="phone" style={error.phone || formIsValid == false  ? { border: 'solid 1px #ec1c24',
                    backgroundColor: 'rgba(236, 28, 36, 0.04)'}:null  }  className="form_div_ele" id="phone" onChange={(e)=>{handleChangePhone(e)}} onBlur={(e)=>{handleChangePhone(e)}} />
                {error.phone ? errorMessage(<FormattedMessage id="validation.phone" />):null}
            </FormControl>
            <FormControl>
                <button onClick={(e) => handleSubmit(e)} className="btn_confirm">
                  <FormattedMessage id="startToday.formSection.sendBtn" />
                    <ArrowForwardIosIcon style={{color:'#ffffff' , fontSize:'small' , marginInline:' 0.27rem' , transform: locale ==  "en" ? null : 'scale(-1)'}}/>
                </button>
            </FormControl>
        </form>
    </div>
)
}

export default Form;
