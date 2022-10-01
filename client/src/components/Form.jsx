import {useState, useEffect} from "react"
import React from 'react'


export default function Form({handleSubmit, formFields, formTypes, multiple, refers, title, defaultValue}) {

    useEffect(() => {
        let newFormData = {}
        formFields.forEach((field, index) => {
            newFormData[field] = defaultValue[index] == null ? "" : defaultValue[index]
        })

        setFormData(newFormData)
    }, [defaultValue])

    const generateFormFields = () => {
        let newFormData = {}
        formFields.forEach((field, index) => {
            newFormData[field] = ""
        })
        return newFormData
    }
    const [formData, setFormData] = useState(generateFormFields)
    let CustomInput = "";

    const handleChange = (e, index) => {
        let value = ''
        e = e || window.event;

        if (e.target.name === "Work Complete"){
            value = e.target.checked
        }
        else if (e.target.name === "Images"){
          value = e.target.value
          // refers[index].current.files = e.target.files
        }
        else{
            value = e.target.value
        }

        setFormData({...formData, [e.target.name]: value})
    }

    return (
      <form onSubmit={(event) => handleSubmit(event, formData)}>
        {formFields.map((field, index) => (
          <React.Fragment key={index}>
            <div hidden>
              {
                (CustomInput =
                  formTypes[index] === "textarea" ? "textarea" : "input")
              }
            </div>
            <div key={index}>
              <label htmlFor={field}>{field}</label>

              <CustomInput
                style={{backgroundColor: "rgba(0,0,0,0)"}}
                name={field}
                type={formTypes[index]}
                multiple={multiple[index]}
                ref={refers[index]}
                onChange={(event) => handleChange(event, index)}
                value={formData[field]}
              />
            </div>
          </React.Fragment>
        ))}
        <button>{title}</button>
      </form>
    );
}