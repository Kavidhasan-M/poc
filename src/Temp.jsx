import './Temp.css';
import React from 'react';
import { Button } from './components/ui/button';
import { Home, CreditCard, ArrowLeftRight, ScrollText, UserRound, Search } from 'lucide-react';
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
} from "./components/ui/accordion";
import { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group";
import { Progress } from "./components/ui/progress";
import {
  Command,
  CommandInput,
} from "./components/ui/command";
import { Calendar } from "./components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table"








function Temp() {
  return (
    <div className="App">
      <main className='flex w-full h-[100vh] mr-3 bg-[var(--light--base---black)]'>
        <aside className='flex-column justify-around w-[25%] px-4 py-6 h-[100vh] bg-[var(--light--base---black)] text-[var(--light--base---white)]'>

          <div className=''>


          <div className='px-4 mb-6'>
            <p className='font-bold text-lg'>LOGO</p>
          </div>

          <div className='flex-column'>
            <div className='rounded-md bg-[var(--light--primary---base)] hover:bg-[var(--light--primary---base)] hover:text-[var(--light--base---white)] transition-colors'>
              <a href="./" className='flex items-center px-4 py-3'>
                <Home size={20} strokeWidth={1.5}/>
                <p className='pl-2'>Dashboard</p>
              </a>
            </div>
            <div className='rounded-md hover:bg-[var(--light--primary---base)] hover:text-[var(--light--base---white)] transition-colors'>
              <a href="./" className='flex items-center px-4 py-3'>
                <CreditCard size={20} strokeWidth={1.5} />
                <p className='pl-2'>Card</p>
              </a>
            </div>
            <div className='rounded-md hover:bg-[var(--light--primary---base)] hover:text-[var(--light--base---white)] transition-colors'>
              <a href="./" className='flex items-center px-4 py-3'>
                <ArrowLeftRight size={20} strokeWidth={1.5} />
                <p className='pl-2'>Transaction</p>
              </a>
            </div>
            <div className='rounded-md hover:bg-[var(--light--primary---base)] hover:text-[var(--light--base---white)] transition-colors'>
              <a href="./" className='flex items-center px-4 py-3'>
                <ScrollText size={20} strokeWidth={1.5} />
                <p className='pl-2'>Reporting</p>
              </a>
            </div>
            <div className='rounded-md hover:bg-[var(--light--primary---base)] hover:text-[var(--light--base---white)] transition-colors'>
              <a href="./" className='flex items-center px-4 py-3'>
                <UserRound size={20} strokeWidth={1.5} />
                <p className='pl-2'>Account</p>
              </a>
            </div>

          </div>
          </div>

          <div className='mt-6'>
            <Card className="bg-[var(--light--gray--60)] border-none">
              <CardHeader>
                <CardTitle>Used Space</CardTitle>
                <CardDescription>
                  <Progress value={33} className="mt-2 mb-1"/>
                  Upgrade your plan to utilize more
                </CardDescription>
              </CardHeader>
              <CardContent>
                
                <Dialog>
                  <DialogTrigger><Button variant="link" size="link">Upgrade</Button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="mb-2">Choose your plan</DialogTitle>
                      <DialogDescription>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose plan" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Standard">Standard</SelectItem>
                            <SelectItem value="Premium">Premium</SelectItem>
                          </SelectContent>
                        </Select>

                        <Button className="mt-4">Buy plan</Button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

          </div>


        </aside>

        <ScrollArea className="w-full">

        <div className='w-full px-8 py-6 rounded-l-2xl bg-[var(--light--base---white)]'>

          <div className='flex justify-between items-center'>
            <div>
              <p className='text-2xl font-bold'>Dashboard</p>
              <p>Welcome back, Kavi!</p>
            </div>

            <div>
              <Command>
                <CommandInput placeholder="Search" />
              </Command>

            </div>
          </div>

          <div className='flex justify-between my-6'>
            <ToggleGroup type="multiple" className="">
              <ToggleGroupItem className="bg-[var(--light--primary---base)] text-[var(--light--base---white)]">
                12 Months
              </ToggleGroupItem>
              <ToggleGroupItem>
                30 Days
              </ToggleGroupItem>
              <ToggleGroupItem>
                7 Days
              </ToggleGroupItem>
            </ToggleGroup>

            <div>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Select Date</MenubarTrigger>
                  <MenubarContent>
                    
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>

            </div>

          </div>

          <div className='flex'>
            <div className='w-[65%]'>

            <div className='flex gap-3 mb-6'>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>
                    <p className='text-3xl'>₹1L</p>
                  </CardTitle>
                  <CardDescription>
                    <p className='text-[var(--light--gray--60)]'>Total Spent</p>
                    </CardDescription>
                </CardHeader>
              </Card>

              <Card className="w-full">
                <CardHeader>
                  <CardTitle>
                    <p className='text-3xl'>₹1L</p>
                  </CardTitle>
                  <CardDescription>
                    <p className='text-[var(--light--gray--60)]'>Total Received</p>
                    </CardDescription>
                </CardHeader>
              </Card>

              <Card className="w-full">
                <CardHeader>
                  <CardTitle>
                    <p className='text-3xl'>₹1L</p>
                  </CardTitle>
                  <CardDescription>
                    <p className='text-[var(--light--gray--60)]'>Total Deposited</p>
                    </CardDescription>
                </CardHeader>
              </Card>

            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <p className='mb-4'>Recent Transactions</p>
                  </CardTitle>
                  <CardContent className="w-full p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Type</TableHead>
                          <TableHead>Date & Time</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    

                                    <Button className="mt-4">Buy plan</Button>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    

                                    <Button className="mt-4">Buy plan</Button>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    

                                    <Button className="mt-4">Buy plan</Button>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    

                                    <Button className="mt-4">Buy plan</Button>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    

                                    <Button className="mt-4">Buy plan</Button>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    

                                    <Button className="mt-4">Buy plan</Button>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    

                                    <Button className="mt-4">Buy plan</Button>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    

                                    <Button className="mt-4">Buy plan</Button>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    

                                    <Button className="mt-4">Buy plan</Button>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    

                                    <Button className="mt-4">Buy plan</Button>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    

                                    <Button className="mt-4">Buy plan</Button>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    

                                    <Button className="mt-4">Buy plan</Button>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    

                                    <Button className="mt-4">Buy plan</Button>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    <p className='font-medium'>Received from</p>
                                    <p className=''>Kunjithapatham</p>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Received</TableCell>
                          <TableCell>9 Mar 24, 10:00PM</TableCell>
                          <TableCell className="text-right font-medium">₹560.0</TableCell>
                          <TableCell className="text-right">
                            <Dialog>
                              <DialogTrigger><Button variant="link" size="link" className="text-[var(--light--primary---base)]">Details</Button></DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle className="mb-2">Transaction detail</DialogTitle>
                                  <DialogDescription>
                                    

                                    <Button className="mt-4">Buy plan</Button>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                  </CardContent>
                </CardHeader>

              </Card>
            </div>
            </div>

            <div className='pl-6 w-[35%]'>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <p className=''>Transfer Money</p>
                  </CardTitle>
                  <CardDescription>
                    <Input placeholder="Account Number" className="mt-3" />
                    <Input placeholder="Amount" className="mt-3" />
                    <Button className="w-full mt-3">Transfer</Button>
                    
                  </CardDescription>
                </CardHeader>

              </Card>
            </div>
          </div>

          




        </div>
        </ScrollArea>

      </main>

    

    </div>


  );
}
















export default Temp;
