import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

interface Seva {
  id: number;
  name: string;
  description: string;
  amount: number;
  duration?: string;
  maxDevotees?: string;
  image: string;
  popular?: boolean;
}

@Component({
  selector: 'app-abhishek-darshan',
  imports: [ CommonModule, FormsModule, Header, Footer ],
  templateUrl: './abhishek-darshan.html',
  
})
export class AbhishekDarshan {

  currentStep = 1;

  adults = 1;
  children = 0;

  selectedSeva: Seva | null = null;

  sevas: Seva[] = [
    {
      id: 1,
      name: 'Rudrabhishek Puja',
      description:
        'Perform the sacred Rudrabhishek to invoke the blessings of Lord Shiva. Includes milk, honey, and bilva patra offerings.',
      amount: 2100,
      duration: '45 mins',
      maxDevotees: 'Max 4 devotees',
      popular: true,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDhGo66HcqJ33kbLt5xlmRQIGHTzlCHcfEQ699sn92vDUayHNJQCSUjM2gVRgtDVimPdJh-FIgjTv21O86JqM2QDG5BjCMwYIjEN3UmulQlo0E43TAt7OR12dqSoxviqvhxtwfbWSO1OCxtWzfxCic2Y383rvnEcV1-OiVP8i15ACLnaW1mUezhOSzwsWuilYGWimNH4Syem9ZTIrVgNiIqKFO5Ps4_Sd48QXgjje7ni1gSFIO9fFr5WOXDMB1BgaqZ-hsQbxVBnbK0',
    },
    {
      id: 2,
      name: 'Special Darshan',
      description:
        'Avoid long queues with a direct entry line for a quick and peaceful darshan of the main deity.',
      amount: 501,
      duration: '15 mins',
      maxDevotees: 'Per person',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBnD-hAoRPuIMkVwPYG8BcLKzoB-oEXjEneXhJnZSbsTHEx1My-3i4RyDKYsvS8WqC5BsAgEH0lFXod01qmhJ2ygEumesGRjEXWRnNGspLq5TGEnjD75rJ20mL4sXZ3gmqIaaFAasBQk_J2k_IfzTc79jLkJd4Pgeuby2VtXT88KkgCsdKCvMQjZKIgePg1DbNh-we-0boaU4dcOt1t1tt36YPCd4qQtszo2jKNAtyUiSSMeRwL2LhQUiMok30Mak8VygHzninOQXP4',
    },
    {
      id: 3,
      name: 'Annadanam Seva',
      description:
        'Contribution towards free meals for devotees. Your donation feeds 11 people in the temple dining hall.',
      amount: 1100,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAGxI8fCAAPzLFAbISzFJl52I-MlR0JreLNrtUxNLk_qTx3JPPJX_wK1NPy2k-Djhx8eCbzhNsb0xYER_Tfqe1urXf-dABmuuNiPQx-9EqftQlcweO4sdO6PVJ_MqCb_1_8g3LIXpWYR_xu7Q2HEAHD-Xb4cupavv55urrXofh4s6Ac-XNTVgZmr90sQytfnbyKynOscE2k-J5l1MgAEiOtZInygdT0-zP8CSHknAGU8qrfoV3BNBzP4mpXJi7vNluOA7iPte-lIl_N',
    },
  ];

  selectSeva(seva: Seva) {
    this.selectedSeva = seva;
  }

  incrementAdults() {
    this.adults++;
  }

  decrementAdults() {
    if (this.adults > 1) this.adults--;
  }

  incrementChildren() {
    this.children++;
  }

  get totalAmount(): number {
    return this.selectedSeva ? this.selectedSeva.amount : 0;
  }

}
