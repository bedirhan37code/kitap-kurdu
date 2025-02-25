import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import api from "../../api";
import Card from "../../components/Card";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  // Kitap Statei
  const [books, setBooks] = useState([]);
  // Urlden parametreyi alma
  const [searchParams] = useSearchParams();
  useEffect(() => {
    // parametre
    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
      // Bu projede jsn-server kullanıyoruz.Bu api bize sıralama yapabilmemiiz için 2 adet
      // paraametre istediğini öyliyor.Birincisi hangi değere göre sıralama yapacağımız
      // ikincisi ise nasıl bir sıralama yapcağımız.
      // Sıralama noktasında ise asc (ascending ((artan)))
      // veya desc (descendin [azalan]) seçenekleri sunar.Bizde burada bu değerleri
      // parametre olarak geçerek api dan sıralanmış verileri aldık.
    };

    api.get("/books", { params }).then((res) => setBooks(res.data));
  }, [searchParams]);
  /// Url deki parametreye bağlı olarak api den
  // veri alabilmek için arama parametresini
  //Urle geçtik

  return (
    <div className="container my-5">
      {/* Result */}
      {books.length === 0 ? (
        <h3 className="bg-danger p-3 rounded fs-3 w-50 text-nowrap">
          Kitap Bulunamadı
        </h3>
      ) : (
        <h3>{books.length} Kitap Bulundu</h3>
      )}

      {/* Filter */}

      <Filter />

      {/* Cards */}

      <div className="card-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
