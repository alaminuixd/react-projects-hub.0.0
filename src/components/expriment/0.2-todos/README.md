# What we have in 0.2-todos?

We dynamically added the input fields here.

```bash
<form onSubmit={handleSubmit}>
  {inputs.map(({ name, placeholder }) => (
    <input
      key={name}
      type="text"
      name={name}
      placeholder={placeholder}
      value={newTodo[name]}
      onChange={handleInputChange}
    />
  ))}
  {success && (
    <p className={styles["success"]}>New todo added successfully!</p>
  )}
  {err && <p className={styles["warning"]}>{err}</p>}
  <button type="submit">Create Todo</button>
</form>
```
