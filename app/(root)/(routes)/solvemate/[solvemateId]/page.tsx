import prismadb from "@/lib/prismadb";
import SolvemateForm from "./components/solvemate";

type SolvemateIdPageProps = {
  params: {
    solvemateId: string;
  };
};
const SolvemateId = async ({ params }: SolvemateIdPageProps) => {
  // TODO: Check subscription

  const solvemate = await prismadb.solvemate.findUnique({
    where: {
      id: params.solvemateId,
    },
  });

  const categories = await prismadb.category.findMany();
  return <SolvemateForm initialData={solvemate} categories={categories} />;
};

export default SolvemateId;
