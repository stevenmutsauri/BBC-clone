import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { getSearchFetchData } from "../../Redux/Search/action";
import PaginationS from "../SearchPagination/PaginationS";
import SearchBar from "./SearchBar";
import SearchSingleArticle from "./SearchSingleArticle";
import style from "../Styles/searchBlue.module.css";
export default function SearchList() {
  const isLoading = useSelector((state) => state.search.isLoading);
  const isError = useSelector((state) => state.search.isError);

  const perPage = 8;
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.search.searchList);
  let totalPages = Math.ceil(searchList.length / perPage);
  const location = useLocation();
  const searchQ = location.search;
  const currentPage =
    searchQ.split("page").length > 1
      ? Number(searchQ.split("&page")[1].substring(1))
      : 1;
  let base = searchQ.split("&page")[0];

  React.useEffect(() => {
    dispatch(getSearchFetchData(searchQ));
  }, [searchQ]);
  
  let startIndex = perPage * (currentPage - 1);
  let endIndex = perPage * currentPage;
  return (
    <div>
      <SearchBar className={style.seach__blue}></SearchBar>
      {!isLoading ? (
        <div>
          {searchList
            ?.filter(
              (item, index) => index + 1 >= startIndex && index + 1 <= endIndex
            )
            .map((item) => (
              <SearchSingleArticle key={item.id} item={item} isLoading={isLoading}></SearchSingleArticle>
            ))}
        </div>
      ) : isError ? (
        <div>something went wrong</div>
      ) : (
        <div>
         
          {new Array(8).fill(0).map((item)=><SearchSingleArticle item={item} isLoading={isLoading}></SearchSingleArticle>)}</div>
      )}

      {searchList && searchList.length === 0 && <h1>no results found</h1>}
      <PaginationS
        currentPage={currentPage}
        totalPages={totalPages}
        baseUrl={base}
      />
    </div>
  );
}
