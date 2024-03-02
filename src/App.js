import logo from './logo.svg';
import './App.css';
import { Button } from './components/ui/button';
import { HamburgerMenuIcon, HomeIcon, PersonIcon, ArchiveIcon, PlusIcon } from '@radix-ui/react-icons';
import { githubLogo } from './images/github-logo.png';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./components/ui/menubar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "./components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card";
import { Separator } from "./components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { ScrollArea } from "./components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion"






function App() {
  return (
    <div className="App">
     <nav className='fixed h-[60px] top-0 left-0 right-0 border-b z-10 bg-[#fff]'>

      <div className='nav-left'>
        <Sheet>
          <SheetTrigger><Button variant="outline"><HamburgerMenuIcon /></Button></SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Access all the pages from here
              </SheetDescription>
              <div className='links-cont'>
                <ul>
                  <li><a href="/"><HomeIcon /> Home</a></li>
                  <li><a href=""><PersonIcon /> Profile</a></li>
                </ul>

                <Separator className='mb-4 mt-4'/>

              </div>
                <ul>
                  <p className='text-sm font-medium pb-2'>Top Repository</p>
                  <li><a href="/" className='flex items-center'>
                        <ArchiveIcon />
                        <p className='pl-1'>Kavidhasan/poc</p>              
                      </a>
                  </li>
                </ul>

            </SheetHeader>
          </SheetContent>
        </Sheet>

        <img src="https://img.icons8.com/material-rounded/40/github.png" alt="Logo" />

      </div>

      <div className='nav-right'>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger><PlusIcon /></MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <ArchiveIcon /> <p className='pl-2'>New Repository</p> 
              </MenubarItem>
              <MenubarItem><ArchiveIcon /> <p className='pl-2'>Import Repository</p></MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <ArchiveIcon /> <p className='pl-2'>New Organization</p> 
              </MenubarItem>
              <MenubarItem><ArchiveIcon /> <p className='pl-2'>New Project</p></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

     </nav>

     <aside className='w-1/5 top-[60px] h-full fixed p-4 border-r'>
      <div className='flex items-center justify-between'>
        <p className='font-medium text-sm'>Top Repository</p>
        <Dialog>
          <DialogTrigger><Button size="sm">New</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New repository</DialogTitle>
            </DialogHeader>
              <Input />
            <DialogFooter>
              <Button size="sm">Create</Button>
            </DialogFooter>
  
        </DialogContent>
        </Dialog>
      </div>
      <Input placeholder="Find a repository" className="mt-4" />

      <div className='mt-4'>
        <div>
          <HoverCard>
            <HoverCardTrigger >
              <a href="/" className='flex items-center'>
                <ArchiveIcon />
                <p className='pl-1'>Kavidhasan/poc</p>              
              
              </a>
              </HoverCardTrigger>
            <HoverCardContent>
              <p className='font-medium'>Kavidhasan/poc</p>
              <p className='text-sm text-gray-600'>Updated on Mar 1</p>
            </HoverCardContent>
          </HoverCard>

        </div>
      </div>

     </aside>

     <ScrollArea className='ml-[24%] mr-[5%] mt-[6%] flex-column'>
      <p className='font-bold text-2xl mb-[16px]'>Home</p>
      <div className='w-[100%] flex justify-between'>
        <div className='w-[60%] mr-[20px]'>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Updates to your homepage feed</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We've combined the power of the Following feed with the For you feed so there’s one 
                place to discover content on GitHub. There’s improved filtering so you can customize 
                your feed exactly how you like it, and a shiny new visual design. ✨</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="p-0 text-blue-600">Learn more</Button>
            </CardFooter>
          </Card>
          

        </div>
        <div className='w-[40%]'>
          <Carousel className='w-[100%]'>
            <CarouselContent>
              <CarouselItem><img src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/f450d4e63211ef94ed6fd29409ac1a7d-1650457056397/pink%20color-min.jpg' alt=''/></CarouselItem>
              <CarouselItem><img className="h-full" src='https://media.istockphoto.com/id/1060834578/photo/turquoise-aqua-color-abstract-background.jpg?s=612x612&w=0&k=20&c=TsO1t9rluEbZdN32YjvpdS3i114DS1Rh6dcKbvaqdUc=' alt=''/></CarouselItem>
              <CarouselItem><img src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/f450d4e63211ef94ed6fd29409ac1a7d-1650457056397/pink%20color-min.jpg' alt=''/></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <Tabs defaultValue="updates" className="w-full mt-[24px]">
            <TabsList className="w-full">
              <TabsTrigger className="w-full" value="updates">Last updates</TabsTrigger>
              <TabsTrigger className="w-full" value="faq">FAQ</TabsTrigger>
            </TabsList>
            <TabsContent value="faq">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Github?</AccordionTrigger>
                  <AccordionContent>
                    Who knows
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              
            </TabsContent>
            <TabsContent value="updates">Change your password here.</TabsContent>
          </Tabs>


        </div>

      </div>
     </ScrollArea>

    

    </div>
  );
}

export default App;
