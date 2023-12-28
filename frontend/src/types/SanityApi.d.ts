// resourceContent Types

interface PopularBook {
    book_title: string;
    book_author: string;
    book_image: any
    book_url: string;
}

interface Resources {
    _id: string;
    title: string;
    popular_books: PopularBook[];
}

interface Course {
    course_title: string;
    introduction: string;
    resources: Resources[];
}
//   what is being used 
interface Resource {
    _id: string;
    name: string;
    courses: {
        course_title: string;
        introduction: string;
    }[];
}
