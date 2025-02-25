import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // !Form Gönderildiğinde çalıcak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenileme engelle
    e.preventDefault();
    // ınput içerisindeki değere eriş
    const text = e.target[0].value;

    // Inputda erişilen değeri url e parametre olarak geç
    searchParams.set("search", text);
    //Urle parametre geç
    setSearchParams(searchParams);
  };
  // Selectden bir değer seçildiğinde çalışacak fonksiyon
  const handleChange = (e) => {
    // Select alanındaki değere eriş
    const value = e.target.value;
    // Bu değeri parametre olarak kullan
    searchParams.set("sort", value);
    // Urle parametre geç
    setSearchParams(searchParams);
  };
  return (
    <div>
      <div className="d-flex justify-content-between mt-4">
        {/* Select */}
        <select
          onChange={handleChange}
          defaultValue="sırala"
          className="form-select w-25"
        >
          <option disabled>sırala</option>
          <option defaultValue="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
        {/* Form */}
        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <input
            type="text"
            placeholder="kitap ismi giriniz ..."
            className="form-control"
          />
          <button className="btn btn-primary px-4 ">Ara</button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
