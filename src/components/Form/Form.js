import styles from "./Form.module.scss";

export default function Form() {
  return (
    <>
      <h2 className={styles.title}>Working with POST request</h2>
      <form>
        <fieldset>
          <legend></legend>
          <label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              placeholder="Your name"
              required
              // value={this.state.name}
              // onChange={this.handleInputChange}
              // id={this.inputId}
            ></input>
          </label>
          <label>
            <input
              type="email"
              name="email"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              // value={this.state.number}
              // onChange={this.handleInputChange}
              required
              placeholder="Email"
            ></input>
          </label>
          <label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              // value={this.state.number}
              // onChange={this.handleInputChange}
              placeholder="Phone"
              required
            ></input>
          </label>
        </fieldset>
        <fieldset>
          <legend>Select your position</legend>
          <label>
            <input
              type="radio"
              name="position"
              value="Frontend developer"
            ></input>
            Frontend developer
          </label>
          <label>
            <input
              type="radio"
              name="position"
              value="Backend developer"
            ></input>
            Backend developer
          </label>
          <label>
            <input type="radio" name="position" value="Designer"></input>
            Designer
          </label>
          <label>
            <input type="radio" name="position" value="QA"></input>
            QA
          </label>
        </fieldset>
        <button type="submit" className={styles.button} disabled>
          Sing up
        </button>
      </form>
    </>
  );
}
