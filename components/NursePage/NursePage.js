import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NursePage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/nurses/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Maybe he resigned without warning! 🤬</h1>;
  }

  return (
    <>
      <img src={data.image} alt={`${data.name} Nurse Photo`} />
      <h1>{data.name} </h1>
      <Link href="/">Back to all</Link>
    </>
  );
}
