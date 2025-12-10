import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

      const questions = [
          {
              _id: '1',
              title: 'How to learn react',
              description: 'Wanna learn react, help',
              tags: [
                  {_id: '1', name: 'React'},
                  {_id: '2', name: 'TypeScript'},
              ],
              author: {_id:'1', name:'John Doe', image: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png'},
              upvotes: 10,
              answers: 5,
              views: 100,
              createdAt: new Date()
          },
          {
              _id: '2',
              title: 'How to learn Javascript',
              description: 'Wanna learn typescript, help',
              tags: [
                  {_id: '1', name: 'Javascript'},
                  {_id: '2', name: 'Javascript'},
              ],
              author: {_id:'2', name:'Stolas Ryan', image: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png'},
              upvotes: 20,
              answers: 15,
              views: 120,
              createdAt: new Date("2021-09-01")
          }
      ]

interface SearchParams{
  searchParams: Promise<{[key: string]: string}>
}


 const Home = async({searchParams}: SearchParams) => {

  const {query = '', filter=''} = await searchParams;

  const filteredQuestions = questions.filter((question)=>{
    const mathcesQuery = question.title 
    .toLowerCase()
    .includes(query.toLowerCase());
    const matchesFilter = filter
    ? question.tags[0].name.toLowerCase()===filter.toLowerCase():true;
    return mathcesQuery && matchesFilter; 
  })
  
  return (
    <>
    <section className="flex w-full flex-col-reverse sm:flex-row  justify-between gap-4 sm:items-center">
      <h1 className="h1-bold text-dark100_light900">All Questions</h1>
      <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900" asChild>
        <Link href={ROUTES.ASK_QUESTION}>
        Ask a Question
        </Link>
      </Button>
    </section>
    <section className="mt-11 ">
      <LocalSearch route='/' imgSrc='/icons/search.svg' placeholder='Search questions' otherClasses='flex-1'/>
    </section>
    <HomeFilter/>
    <div className="mt-10 flex w-full flex-col gap-6 ">
      {filteredQuestions.map((question)=>(
        <QuestionCard key={question._id} question ={question}/>
      ))}
    </div>
    </>
    
  );
}
export default Home