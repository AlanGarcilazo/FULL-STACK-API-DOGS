import { useState, useEffect } from "react";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addDog, getTemperaments } from '../../action/index';
import Nav from '../../Layout/Nav/Nav';
import Footer from '../../Layout/Footer/Footer';
import style from './newBreed.module.css'


const NewBreed = () => {
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  const initialState = {
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    yearsMin: "",
    yearsMax: "",
    temperament: [],
  };
 
 const [values, setValues] = useState(initialState);
 const [namesTemp, setNamesTemp] = useState([]);
 const [errors, setErrors] = useState(false);
 const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelect = (e) => {
    let index = e.target.selectedIndex;
    setNamesTemp((names) => [...names, e.target.options[index].text]);
    setValues((values) => ({
      ...values,
      temperament: [...values.temperament, +(e.target.value)],
    }));
  };
  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.name &&
      values.heightMin &&
      values.heightMax &&
      values.heightMax > values.heightMin &&
      values.weightMin &&
      values.weightMax &&
      values.temperament
      
    ) {
      dispatch(addDog(values));
      setErrors(false);
      setSuccess(true);
      setValues(initialState);
      setNamesTemp([]);
    } else {
      setSuccess(false);
      setErrors(true);
    }
  };

  useEffect(() => {
    dispatch(getTemperaments());  
  }, [dispatch]);

  return (
    <>    
    <Nav />
    <div className={style.contain}>    
      <h1 className={style.h1}>Create your Breed</h1>
      <div className={style.center}>

      <form onSubmit={handleSubmit}>
        <div className={style.divs}>
          <label className={style.label}>Name of New Breed </label>          
          <input className={style.inputs} type="text" placeholder="Example: Bulldog"  name="name" value={values.name} onChange={handleChange} autoComplete="off"/>
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className={style.divs}>
          <label className={style.label}>Height Min in Cm: </label>
          <input className={style.inputs} type="number" placeholder="Example: 10cm"  name="heightMin" value={values.heightMin} onChange={handleChange} autoComplete="off"/>
        </div>
        <div className={style.divs}>
          <label className={style.label}>Height Max in Cm: </label>
          <input className={style.inputs} type="number" placeholder="Example: 150cm"   name="heightMax" value={values.heightMax} onChange={handleChange} autoComplete="off"/>
        </div>
        <div className={style.divs}>
          <label className={style.label}>Weight Min in Kg: </label>
          <input className={style.inputs} type="number" placeholder="Example: 1kg"  name="weightMin" value={values.weightMin} onChange={handleChange} autoComplete="off"/>
        </div>
        <div className={style.divs}>
          <label className={style.label}>Weight Max in Kg: </label>
          <input className={style.inputs} type="number" placeholder="Example: 150kg"  name="weightMax" value={values.weightMax}onChange={handleChange} autoComplete="off"/>
        </div>        
        <div className={style.divs}>
          <label className={style.label}>Life Span Min in Years: </label>
          <input className={style.inputs} type="number" placeholder="Example: 1 year"  name="yearsMin" value={values.yearsMin} onChange={handleChange} autoComplete="off"/>
        </div>
        <div className={style.divs}>
          <label className={style.label}>Life Span Max in Years: </label>
          <input className={style.inputs} type="number" placeholder="Example: 30 years"  name="yearsMax" value={values.yearsMax} onChange={handleChange} autoComplete="off"/>
        </div>
        
        <div className={style.divs1}>
          <label className={style.label1}>Temperaments: </label>
          <select className={style.select} onChange={handleSelect}>
            <option value="all">Todos</option>
            {temperaments?.map((elem) => (
              <option key={elem.id} value={elem.id}>
                {elem.name}
              </option>
            ))}
          </select>
          <ul>
            <h3 className={style.h3}>Selected temperaments: </h3>
            <div className={style.conteinTemp}>
              {namesTemp?.map((elem, i) => (
                <div key={i}>
                  <p className={style.p1}>{elem}</p>
                </div>
              ))}
            </div>
          </ul>
        </div>
       
         <div className={style.submiteo}>         
        <button  className={style.btn} type="submit">CREATE !</button> 
        </div>     
                        
      </form>
      {success ? <h2 className={style.h2}>Created Successfully</h2> : null}
      {errors ? <h2 className={style.h2e}>Something went wrong!</h2> : null}      
      </div>  
    </div>
    <Footer />    
    
    </>
  );
};

export default NewBreed;