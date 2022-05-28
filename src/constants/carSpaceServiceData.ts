import { CarLeftSideIcon } from 'src/components/atoms/Icons/CarLeftSideIcon';
import { FilesStackIcon } from 'src/components/atoms/Icons/FilesStackIcon';
import { FolersQueueIcon } from 'src/components/atoms/Icons/FoldersQueueIcon';
import { ShipIcon } from 'src/components/atoms/Icons/ShipIcon';

export interface ICarSpaceService {
  heading: string;
  content: string;
  id: string;
  Icon: any;
}
export const carSpaceServices: ICarSpaceService[] = [
  {
    id: 'installment',
    Icon: FilesStackIcon,
    heading: 'შიდა განვადება',
    content: `მომხმარებლებს ვთავაზობთ მანქანის დაფინანსებას, მის საქართველოში
            ჩამოსვლამდე. თუკი გსურთ ავტმობილის ჩამოყვანა და გჭირდებათ თანხა, რომ
            დაფაროთ ავტომობილის ღირებულება, ჩვენ გაძლევთ შესაძლებლობას მარტივად
            მოაგვაროთ ეს პრობლემა და დაიფინანსოთ მანქანის ღირებულების 80%-მდე
            თანხა.`,
  },
  {
    id: 'leasing',
    Icon: FolersQueueIcon,
    heading: `ლიზინგი`,
    content: `მანქანის ჩამოყვანა რამდენიმი ტიპის კალკულაციასთანაა დაკავშირებული. გთავაზობთ ამერიკიდან ტრანსპორტირების, განბაჟების, შიდა დაფინანსებისა და ლიზინგის კალკულატორებს, რომელიც დაგეხმარებათ დეტალურად დაიანგარიშოთ ყველა შესაძლო ხარჯი, რაც მანქანის ჩამოყვანასთანაა დაკავშირებული.`,
  },
  {
    id: 'carimport',
    Icon: ShipIcon,
    heading: `მანქანის ჩამოყვანა`,
    content: `ბაზარზე არსებული მრავალწლოვანი გამოცდილებიდან გამომდინარე, გვყავს საერთაშორისო პარტნიორები, რომელთა დახმარებითაც მანქანის ჩამოყვანის სერვისი ხდება საერთაშორისო ხარისხით. ავტომობილები ჩამოგვყავს უმოკლეს დროში და შესაძლო მინიმალურ ფასად.`,
  },
  {
    id: 'choosingcar',
    Icon: CarLeftSideIcon,
    heading: `მანქანის შერჩევა`,
    content: `ჩვენი პროფესიონალი ავტო ასისტენტი დაგეხმარებათ თქვენთვის სასურველი ავტომობილის შერჩევაში. შეისწავლის ამ არჩეული ავტომობილის ისტორიას, დაზიანებებს და ზოგად მდგომარეობას. ამ ინფორმაციაზე დაყრდნობით დაგეხმარებათ კონკრეტული გადაწყვეტილების მიღებაში, რაზეც აიღებს შესაბამის პასუხისმგებლობას.`,
  },
];
