document.write(`
        <h1 style="text-align:center;">Eliminating Windows</h1>
        <br>
        <p>Uhhhh……. So finally today is “D day”. I successfully eliminated the last full-time windows device on my network. This is something I badly wanted to do since the past 2 months . So, on this auspicious day I would like to throw some light on why I left windows. So, I am not a long-time windows user which made it a bit easy for my transition to GNU+linux. Linux always seemed like the cool terminal based OS which many people are scared of . The hilarious part is I never knew that there were linux distributions like Ubuntu  which had a GUI. Now I was excited to try it out. The easiest way to try of any OS is using a virtual machine. So I went straight to their website grabbed a copy of the .iso file and booted it as a VM. I was kind of impressed with it. I used it for some day but………. At the end of the day it is a VM so I would feel it slow this pushed me to dual boot. Again ( humans are dumbbb ) people around me scared me that I would corrupt my windows. Now, let me be honest I was actually scared to dual boot. But what can stop a person who had to build his PC (a PC with low hardware built for surfing the internet and to learn how does a computer work if you are still into the specs its i5 5th gen, 8GB RAM, no dedicated GPU)and install a copy of windows with the  “Activate Windows” watermark :lmao: . I thought at max I would have to format my hard drive and reinstall windows. Guess what I installed ubuntu without any issue it was just that u need to install ubuntu in the right location. Although I spent some noticeable amount of time just to instal the wifi drivers as I was a newbie to linux and my wifi drivers were difficult to find but not impossible. But I still had to go to windows for things like  MS Word. Few days later, I got a good offer on a MacBook with the M1 chip so I got it as it supports the boring windows stuff I need along with it has the Unix terminal so without a second thought I got it. Few days later I wiped windows from my machine. Then lived this human peacefully ever after…….</p>
        <br>
        
        <h2>But why linux ??</h2>
        Once a great person said,<strong>“ Microsoft works with some companies to get the hardware working, people get laptops to make linux works smoothly with it”. </strong>
        <p>I don’t play games and the most of the stuff I do on my machine is browse the internet and develop stuff. So this is a non-gamer point-of-view. Although you can play some games on Linux using a translation layer I have no clue how things work with games. Its a complete developer point-of-view. So you asked me “why linux?” So, here is the answer you update your system whenever you want not whenever ur computer wants . You are the owner of the machine which means you must have entire control over the machine and linux gives you that. Updating ur OS is as simple as doing “sudo apt update && sudo apt upgrade” if u are in arch you don’t even need to type that “sudo pacman -Syu” its this simple it just feels like a Kaby lame moment. Updates don’t need a reboot until and unless it is a kernel update. Yeah you heard it right no reboot required. No Blue screens :lmao: . Nowadays not all kernel updates need a reboot. Not just that installing package is simple AF. How do u install python in windows ? Open browser -> go to some website -> download a package and Bla Bla Bla . But in linux its just as simple as open terminal and type “sudo apt install python3 python3-pip” and done . Linux made my old hardware feel smooth which was never the case in windows. Linux is very reliable dude that is the reason they use it in the server.</p><br>
        <img src="/images/nvidia-smi.png" alt="nvidia-smi" style="width: 33.33vw;display: block; margin: 0 auto;">
        <img src="/images/htop.png" alt="nvidia-smi" style="width: 80vw;display: block; margin: 0 auto;padding-top:10px">

        <h4 style="text-align:center">Linux being run on a my college super computer and college server</h4></br>
        <p>Its uptime is really great. Microsoft always collects your data although some distributions of linux collect data including Ubuntu BUT there are distributions which don’t collect any data. Linux is open source. If you are that concern you can go look at the source code anytime. I can get more than 75% of my work done in linux just right from the terminal without any GUI. I do that on all the servers I have access to until and unless the tool I use only works with a GUI. Woah I totally forgot about the blue screens ufff thats a big pain. You complete your work at night and go sleep and without your <strong>consent</strong> your machine decides to update itself it automatically does stuff and mostly ends up running into issues. Ok I could have taken it but you know what the error message is. "OOPS!! Something went wrong" "Your PC ran into a problem"</p>
        <br>
        <img src="/images/windowsishit.png" alt="Windows" style="display: block; margin: 0 auto; width:80vw;"><br>
        <p style="width:40vw"> Dear Microsoft,<br>I can understand that some part of ur shit is broken even without your dumb error messages. Seriously Microsoft? Was that all you could do? Couldn't you have displayed atleast 3-4 lines explaining what was causing the issue?</p>
        <p><span><b>Update:</b></span> I switched to Arch Linux with i3wm. Yes, I have dmenu and some scripts and a bunch of aliases to make my life easier on arch. Yes, I ofc enabled parallel downloads in pacman. Ok If you are read it till here then I am planning to hosting mirrors for some linux distributions and I will try to write a different blog about it.</p>
`);
