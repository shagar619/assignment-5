


                //    Common Function


function getInnerTextById(id) {
    const innerText = document.getElementById(id).innerText;
    const innerNumber = parseFloat(innerText);

    return innerNumber;
}






                                //    Donation Button - 1





document.getElementById('donation-btn-1').addEventListener('click', (event) => {

    event.preventDefault();

        my_modal_1.showModal();


        const donationValue = getInnerTextById('donation-value');
        const accountBalance = getInnerTextById('account-balance');
     

        const inputFieldValue =document.getElementById('donation-input-value').value;
     
        const totalDonation = parseFloat(inputFieldValue);
     
     
                     //    + Donation
     
         document.getElementById('donation-value').innerText = donationValue + totalDonation;
         
                         //    - Donation
     
         document.getElementById('account-balance').innerText = accountBalance - totalDonation;
         
         
                             //   History
     
         document.getElementById('history-text').innerHTML += `
     
         <h3> ${totalDonation} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
        
     
         `   
             
});






                                // Donation Button - 2


document.getElementById('donation-btn-2').addEventListener('click', (event) => {

    event.preventDefault();

    my_modal_1.showModal();


    const donationValue = getInnerTextById('donation-value-1');
    const accountBalance = getInnerTextById('account-balance');
 
    const inputFieldValue =document.getElementById('donation-input-value-1').value;
 
    const totalDonation = parseFloat(inputFieldValue);
 
 
                 //    + Donation
 
     document.getElementById('donation-value-1').innerText = donationValue + totalDonation;
     
                     //    - Donation
 
     document.getElementById('account-balance').innerText = accountBalance - totalDonation;
     
     
                         //   History
 
     document.getElementById('history-text').innerHTML += `
 
     <h3> ${totalDonation} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
    
 
     `    
             

});






                            //    Donation Button - 3



document.getElementById('donation-btn-3').addEventListener('click', (event) => {

    event.preventDefault();

    my_modal_1.showModal();


    const donationValue = getInnerTextById('donation-value-2');
    const accountBalance = getInnerTextById('account-balance');
 
    const inputFieldValue =document.getElementById('donation-input-value-2').value;
 
    const totalDonation = parseFloat(inputFieldValue);
 
 
                 //    + Donation
 
     document.getElementById('donation-value-2').innerText = donationValue + totalDonation;
     
                     //    - Donation
 
     document.getElementById('account-balance').innerText = accountBalance - totalDonation;
     
     
                         //   History
 
     document.getElementById('history-text').innerHTML += `
 
     <h3> ${totalDonation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
    
 
     `    
             

});






                        //   Donation Button Show

document.getElementById('donation-button').addEventListener('click', () => {

    document.getElementById('donation-button').classList.remove('btn-bg-white');
    document.getElementById('history-button').classList.remove('btn-primary');

    document.getElementById('main-part').classList.remove('hidden');
    document.getElementById('footer-section').classList.add('hidden');
});


                            // History Button

document.getElementById('history-button').addEventListener('click', () => {
    document.getElementById('history-button').classList.add('btn-primary');
    document.getElementById('donation-button').classList.add('btn-bg-white');


    document.getElementById('footer-section').classList.remove('hidden');
    document.getElementById('main-part').classList.add('hidden');
});






            //  window Part


document.getElementById('blog-button').addEventListener('click', () => {


    window.location.href= './faq.html'
}); 















