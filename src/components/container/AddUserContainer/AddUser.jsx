import React from 'react';
import style from './addUser.module.css';

const AddUser = () => {
  const handleCheckboxClick = (e) => {
    console.log(`${e.target.value} checkbox toggled`);
  };

  const renderPropertyInfo = (title, suffix = "") => (
    <div className={style.property_info}>
      <h3>{title}</h3>
      {["maintenance", "property", "lease", "accounting"].map((value) => (
        <label key={value + suffix} className={style.checkbox_label}>
          <input
            type="checkbox"
            name="department-info"
            value={value}
            onChange={handleCheckboxClick}
          />
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </label>
      ))}
    </div>
  );

  return (
    <div className={style.center_wrapper}>
    <div className={style.add_user_container}>
      <div className={style.breadcrumb}>
        <a href="#">Portfolio Title</a> / <span>Add User</span>
      </div>

      <div className={style.user_information}>
        <div className={style.user_account}>
          <div className={style.user_title}>
          <div className={style.text_wrapper_2}>First/Last Name</div>
          <div className={style.user_edit}>
            <a href="#" className={style.edit_link}>Edit</a>
          </div>
          </div>
          <form className={style.user_form}>
            <div className={style.form_row}>
              <div className={style.form_group}>
                <label htmlFor="firstname">First name</label>
                <input type="text" id="firstname" name="first-name" />
              </div>
              <div className={style.form_group}>
                <label htmlFor="lastname">Last name</label>
                <input type="text" id="lastname" name="last-name" />
              </div>
            </div>
            <div className={style.form_group}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="Email" />
            </div>
            <div className={style.form_group}>
              <label htmlFor="mobilenumber">Mobile number</label>
              <input type="tel" id="mobilenumber" name="Mobile number" />
            </div>
            <label className={style.checkbox_label}>
              <input
                type="checkbox"
                name="smsactive"
                value="smsactive"
                onChange={handleCheckboxClick}
              />
              SMS Active
            </label>
            {renderPropertyInfo("Property title 1")}
          </form>
        </div>

        <div className={style.user_account}>
          <div className={style.user_title}>
            <h2>First/Last Name</h2>
          </div>
          <form className={style.user_form}>
            <div className={style.form_row}>
              <div className={style.form_group}>
                <label htmlFor="firstname2">First name</label>
                <input type="text" id="firstname2" name="first-name" />
              </div>
              <div className={style.form_group}>
                <label htmlFor="lastname2">Last name</label>
                <input type="text" id="lastname2" name="last-name" />
              </div>
            </div>
            <div className={style.form_group}>
              <label htmlFor="email2">Email</label>
              <input type="email" id="email2" name="Email" />
            </div>
            <div className={style.form_group}>
              <label htmlFor="mobilenumber2">Mobile number</label>
              <input type="tel" id="mobilenumber2" name="Mobile number" />
            </div>
            <label className={style.checkbox_label}>
              <input
                type="checkbox"
                name="smsactive"
                value="smsactive"
                onChange={handleCheckboxClick}
              />
              SMS Active
            </label>
            {renderPropertyInfo("Property title 2", "2")}
            <div className={style.button_group}>
              <button type="submit" className={style.btn_primary}>Add User</button>
              <button type="button" className={style.btn_secondary}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddUser;