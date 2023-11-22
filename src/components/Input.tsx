interface Props {
  type: string;
  label: string;
  id: string;
}

const Input = ({ type, label, id }: Props) => {
  return (
    <div className="mb-3">
      <label htmlFor={id}>{label}</label>
      <input className="form-control" type={type} id={id} />
    </div>
  );
};

export default Input;
