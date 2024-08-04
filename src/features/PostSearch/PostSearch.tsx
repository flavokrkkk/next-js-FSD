"use client";

import { useActions } from "@/shared/hooks/useActions";
import { Button } from "@headlessui/react";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

const PostSearch = () => {
  const [search, setSearch] = useState("");

  const { searchPosts, getAsyncSearchPosts } = useActions();

  const handleSearchPosts = useCallback(() => {
    searchPosts(search);
  }, [search]);

  const handleChangeSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    []
  );

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getAsyncSearchPosts(search);
  };

  useEffect(() => {
    handleSearchPosts();
  }, [search]);

  return (
    <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
      <input
        className="border border-blue-200 p-2 outline-blue-300"
        type="search"
        placeholder="Search..."
        value={search}
        onChange={handleChangeSearch}
      />
      <div className="flex justify-center">
        <Button
          className="rounded-md bg-blue-500 px-6 py-1 text-white"
          type="submit"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default PostSearch;
