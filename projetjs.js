// Variables
const boutongauche=document.getElementById('changement')
const boutondroite=document.getElementById('changementdroite')
const gauche=document.getElementById('gauche')

boutondroite.style.display='none'

// Event
boutongauche.addEventListener('click',()=>{
    boutongauche.style.display='none'
    boutondroite.style.display='block'
    document.querySelector('#gauche').style.backgroundColor='#b7c3cc'
    document.querySelector('#droite').style.backgroundColor='pink'

})
boutondroite.addEventListener('click',()=>{
    boutongauche.style.display='block'
    boutondroite.style.display='none'

    document.querySelector('#gauche').style.backgroundColor='rgba(64, 61,62, 255)'
    document.querySelector('#droite').style.backgroundColor='black'

})


let listederoulante=document.getElementById('selection')
//LISTE DE MES ENSEIGNANTS
let enseignant= ['ALY','BAILA','Ndoye','Mbaye','Djiby','Seckouba']
//document.querySelector('#e').innerHTML=`enseignant.length`
//LISTE DE MES CLASSSES 
let classes= ['L2 GLRS A','L2 GLRS B', 'L2 ETSE', 'L1 A','IAGE B','L2 CDSD']
//LISTE DE MES SALLES 
let salles=['101','102','103','104','201','incub']
// LISTE DE MES MODULES
let modules=['ALGO','PHP','PYTHON','LC','JAVASCRIPT','JAVA']
//CORRESPONDANCE ENTRE MES LISTES

let info=[
    {e:enseignant[0],c:classes[5],m:modules[2],s:salles[1],heured:9,heuref:12,j:'lundi'},
    {e:enseignant[0],c:classes[5],m:modules[4],s:salles[4],heured:15,heuref:17,j:'mercredi'},
    {e:enseignant[1],c:classes[5],m:modules[1],s:salles[1],heured:14,heuref:17,j:'lundi'},
    {e:enseignant[3],c:classes[5],m:modules[3],s:salles[5],heured:8,heuref:10,j:'jeudi'}
]

let mesboutons=document.querySelectorAll('#gauche button')
document.querySelector('.e').addEventListener('click',()=>{
    document.querySelector('.e').style.backgroundColor='aqua'
    document.querySelector('.c').style.backgroundColor='gray'
    document.querySelector('.s').style.backgroundColor='gray'
    document.querySelector('.m').style.backgroundColor='gray'

    
    listederoulante.innerHTML=""
    let titre=document.createElement('option')
    titre.text='--Enseignants--'
    listederoulante.appendChild(titre)
    //document.querySelector('.e').style.backgroundColor='aqua'
    for (let i=0;i<enseignant.length;i++){
        let le = document.createElement('option')
        le.id = 'option'+i

        le.text=enseignant[i]
        listederoulante.appendChild(le)
    }
   
})

document.querySelector('.c').addEventListener('click',()=>{
    document.querySelector('.c').style.backgroundColor='orange'
    document.querySelector('.e').style.backgroundColor='gray'
    document.querySelector('.s').style.backgroundColor='gray'
    document.querySelector('.m').style.backgroundColor='gray'
    
    listederoulante.innerHTML=""
    let titre=document.createElement('option')
    titre.text='Classes'
    listederoulante.appendChild(titre)
    for (let i=0;i<classes.length;i++){
        let le = document.createElement('option')

        le.text=classes[i]
        listederoulante.appendChild(le)
    }
})

document.querySelector('.s').addEventListener('click',()=>{
    document.querySelector('.e').style.backgroundColor='gray'
    document.querySelector('.c').style.backgroundColor='gray'
    document.querySelector('.m').style.backgroundColor='gray'

    document.querySelector('.s').style.backgroundColor='green'

   
    
    listederoulante.innerHTML=""
    let titre=document.createElement('option')
    titre.text='Salles'
    listederoulante.appendChild(titre)
    for (let i=0;i<salles.length;i++){
        let le = document.createElement('option')

        le.text=salles[i]
        listederoulante.appendChild(le)
    }
})

document.querySelector('.m').addEventListener('click',()=>{
    document.querySelector('.m').style.backgroundColor='red'

    document.querySelector('.c').style.backgroundColor='gray'
    document.querySelector('.s').style.backgroundColor='gray'
    document.querySelector('.e').style.backgroundColor='gray'
    
    listederoulante.innerHTML=""
    let titre=document.createElement('option')
    titre.text='Modules'
    listederoulante.appendChild(titre)
    
    for (let i=0;i<modules.length;i++){
        let le = document.createElement('option')

        le.text=modules[i]
        listederoulante.appendChild(le)
    }
})

// Creation de mes enseignants salles module ou classe
    let formens=document.createElement('div')
    let enteteens=document.createElement('h3')
    enteteens.innerHTML='AJOUTER UN ENSEIGNANT'
    let myf=document.createElement('form')
    let lab=document.createElement('label')
    lab.innerHTML='Nom:'
    let saisi=document.createElement('input')
    saisi.id='saisi'
    myf.appendChild(lab)
    myf.appendChild(saisi)
    formens.appendChild(enteteens)
    formens.appendChild(myf)
    let ajou=document.createElement('button')
    ajou.textContent='Ajouter'
    ajou.id='ajouenseignant'
    ajou.type='submit'
    let divbouton=document.createElement('div')
    divbouton.appendChild(ajou)
    formens.appendChild(divbouton)
    formens.style.position='absolute'
    formens.style.top='50%'
    formens.style.color='black'
    formens.style.backgroundColor='aqua'
    document.getElementById('gauche').appendChild(formens)
    formens.style.display='none'
    var nomens=''
    document.getElementById('be').addEventListener('click',()=>{
        formens.style.display='block'
    })
    document.getElementById('ajouenseignant').addEventListener('click',()=>{
        formens.style.display='none'
        enseignant.push(saisi.value)
        saisi.value=""
        console.log(enseignant)
        

       
    })

//CREATION DES CARRES S'IL CHOISI UN ENSEIGNANT
function creationdiv(a) {
    let carré=document.createElement('div')
    carré.innerHTML=`<br>`+a.c +`<br>`+a.m+`<br>`+a.s
    carré.style.height='98px'
    carré.style.borderRadius='10%'
    carré.style.display='flex'
    carré.style.flexDirection='column'
    carré.style.textAlign='center'
    carré.style.color='white'
    carré.style.fontWeight='bold'
    
    duree=a.heuref-a.heured
    ml=a.heured-8

    carré.style.width=`${duree*11}%`
    carré.style.marginLeft=`${ml*11}%`
   
    
    
    return carré


}
function creationmodule(a) {
    let carré=document.createElement('div')
    carré.innerHTML=`<br>`+a.c +`<br>`+a.e+`<br>`+a.m
    carré.style.height='98px'
    carré.style.borderRadius='10%'
    carré.style.display='flex'
    carré.style.flexDirection='column'
    carré.style.textAlign='center'
    carré.style.color='white'
    carré.style.fontWeight='bold'
    
    
    duree=a.heuref-a.heured
    ml=a.heured-8

    carré.style.width=`${duree*11}%`
    carré.style.marginLeft=`${ml*11}%`
    return carré


}
function creationsalle(a) {
    let carré=document.createElement('div')
    carré.innerHTML=`<br>`+a.c +`<br>`+a.e+`<br>`+a.m
    carré.style.height='98px'
    carré.style.borderRadius='10%'
    carré.style.display='flex'
    carré.style.flexDirection='column'
    carré.style.textAlign='center'
    carré.style.color='white'
    carré.style.fontWeight='bold'
    
    duree=a.heuref-a.heured
    ml=a.heured-8

    carré.style.width=`${duree*11}%`
    carré.style.marginLeft=`${ml*11}%`
    
    return carré


}
// A REVOIR POUR LA CREATION AUTOMATIQUE DES TRUCS
//POUR ALY
document.querySelector('.lg4').style.display='flex'
Alypython=creationdiv(info[0])
Alypython.style.backgroundColor='rgb(255,0,153)'
Alypython.style.display='none'
document.querySelector('.lg1').appendChild(Alypython)

Alyjs=creationdiv(info[1])
Alyjs.style.backgroundColor='rgb(255,0,153)'
Alyjs.style.display='none'
document.querySelector('.lg3').appendChild(Alyjs)

//POUR BAILA
Bailajs=creationdiv(info[2])
Bailajs.style.backgroundColor='orange'
document.querySelector('.lg1').appendChild(Bailajs)
Bailajs.style.display='none'


//POur Mbaye
Mbayelc=creationdiv(info[3])
Mbayelc.style.backgroundColor='aquamarine'
document.querySelector('.lg4').appendChild(Mbayelc)
Mbayelc.style.display='none'

//Pour python

pythonmodule=creationmodule(info[0])
pythonmodule.style.backgroundColor='orange'
pythonmodule.style.display='none'
document.querySelector('.lg1').appendChild(pythonmodule)
//Pour PHP

phpmodule=creationmodule(info[2])
phpmodule.style.backgroundColor='rgb(197, 97, 114)'
document.querySelector('.lg1').appendChild(phpmodule)
phpmodule.style.display='none'

//POUR LC
lcmodule=creationmodule(info[3])

lcmodule.style.backgroundColor='green'
document.querySelector('.lg4').appendChild(lcmodule)
lcmodule.style.display='none'
//POUR JAVASCRIPT
document.querySelector('.lg1').style.display='flex'

    jsmodule=creationmodule(info[1])
   
        jsmodule.style.backgroundColor='teal'
        jsmodule.style.display='none'

        document.querySelector('.lg3').appendChild(jsmodule)

//POUR LA SALLE 102
sallejs=creationsalle(info[1])
sallejs.style.backgroundColor='rgb(255,0,153)'
sallejs.style.display='none'
document.querySelector('.lg3').appendChild(sallejs)

sallephp=creationsalle(info[2])
sallephp.style.backgroundColor='aqua'
document.querySelector('.lg1').appendChild(sallephp)
sallephp.style.display='none'
//POUR LA SALLE INCUB
salleincub=creationsalle(info[3])
salleincub.style.backgroundColor='blue'
document.querySelector('.lg4').appendChild(salleincub)
salleincub.style.display='none'

document.getElementById('selection').addEventListener('change',(event)=>{
    const valeur = event.target.value
    document.getElementById('planning').textContent="Planning : "+valeur
    console.log(valeur)
    if (valeur=='ALY'){
       
        Alypython.style.display='block'
        Alyjs.style.display='block'
        Mbayelc.style.display='none'
        Bailajs.style.display='none'
        pythonmodule.style.display='none'
        phpmodule.style.display='none'
        lcmodule.style.display='none'
        jsmodule.style.display='none'
        sallejs.style.display='none'
        sallephp.style.display='none'
        salleincub.style.display='none'
    }
    else if (valeur=='Mbaye'){
       
        Alypython.style.display='none'
        Alyjs.style.display='none'
        Mbayelc.style.display='block'
        Bailajs.style.display='none'
        pythonmodule.style.display='none'
        phpmodule.style.display='none'
        lcmodule.style.display='none'
        jsmodule.style.display='none'
        sallejs.style.display='none'
        sallephp.style.display='none'
        salleincub.style.display='none'
     }
    else if (valeur=='BAILA'){
       
        Alypython.style.display='none'
        Alyjs.style.display='none'
        Mbayelc.style.display='none'
        Bailajs.style.display='block'
        pythonmodule.style.display='none'
        phpmodule.style.display='none'
        lcmodule.style.display='none'
        jsmodule.style.display='none'
        sallejs.style.display='none'
        sallephp.style.display='none'
        salleincub.style.display='none'


    }
    else if (valeur=='PYTHON'){
       
        Alypython.style.display='none'
        Alyjs.style.display='none'
        Mbayelc.style.display='none'
        Bailajs.style.display='none'
        pythonmodule.style.display='block'
        phpmodule.style.display='none'
        jsmodule.style.display='none'
        lcmodule.style.display='none'
        sallejs.style.display='none'
        sallephp.style.display='none'
        salleincub.style.display='none'
        




    }
    else if (valeur=='PHP'){
       
        Alypython.style.display='none'
        Alyjs.style.display='none'
        Mbayelc.style.display='none'
        Bailajs.style.display='none'
        pythonmodule.style.display='none'
        pythonmodule.style.display='none'
        jsmodule.style.display='none'
        phpmodule.style.display='block'
        lcmodule.style.display='none'
        sallejs.style.display='none'
        sallephp.style.display='none'
        salleincub.style.display='none'
        

    }
    else if (valeur=='LC'){
       
        Alypython.style.display='none'
        Alyjs.style.display='none'
        Mbayelc.style.display='none'
        Bailajs.style.display='none'
        pythonmodule.style.display='none'
        pythonmodule.style.display='none'
        phpmodule.style.display='none'
        jsmodule.style.display='none'
        lcmodule.style.display='block'
        sallejs.style.display='none'
        sallephp.style.display='none'
        salleincub.style.display='none'
        

    }
    else if (valeur=='JAVASCRIPT'){
        Alypython.style.display='none'
        Alyjs.style.display='none'
        Mbayelc.style.display='none'
        Bailajs.style.display='none'
        pythonmodule.style.display='none'
        pythonmodule.style.display='none'
        phpmodule.style.display='none'
        lcmodule.style.display='none'
        jsmodule.style.display='block'
        sallejs.style.display='none'
        sallephp.style.display='none'
        salleincub.style.display='none'
        
        
    }
    else if (valeur=='102'){
        Alypython.style.display='none'
        Alyjs.style.display='none'
        Mbayelc.style.display='none'
        Bailajs.style.display='none'
        pythonmodule.style.display='none'
        pythonmodule.style.display='none'
        phpmodule.style.display='none'
        lcmodule.style.display='none'
        jsmodule.style.display='none'
        salleincub.style.display='none'

        sallejs.style.display='block'
        sallephp.style.display='block'
       
    }
    else if (valeur=='incub'){
        Alypython.style.display='none'
        Alyjs.style.display='none'
        Mbayelc.style.display='none'
        Bailajs.style.display='none'
        pythonmodule.style.display='none'
        pythonmodule.style.display='none'
        phpmodule.style.display='none'
        lcmodule.style.display='none'
        jsmodule.style.display='none'
        sallejs.style.display='none'
        sallephp.style.display='none'
        salleincub.style.display='block'
        
        
    }
    else {
        Alypython.style.display='none'
        Alyjs.style.display='none'
        Mbayelc.style.display='none'
        Bailajs.style.display='none'
        pythonmodule.style.display='none'
        pythonmodule.style.display='none'
        phpmodule.style.display='none'
        lcmodule.style.display='none'
        jsmodule.style.display='none'
        sallejs.style.display='none'
        sallephp.style.display='none'
        salleincub.style.display='none'    
    }

})
console.log(info)
let allbouton=document.querySelectorAll('.jour button')
console.log(allbouton)
//CREATION DE MON FORMULAIRE
let conteneur=document.createElement('div')
            conteneur.style.width='50%'
            conteneur.style.height='450px'
            conteneur.style.position='absolute'
            conteneur.style.display='flex'
            conteneur.style.flexDirection='column'
            conteneur.style.textAlign='center'
        
            let entete=document.createElement('header')
            entete.innerHTML=`<h3 id='modal'>MOdal Title</h3>`
            entete.style.height='20%'
            entete.style.width='100%'
            entete.style.color='white'
            entete.style.backgroundColor='black'
            
            conteneur.appendChild(entete)
            let monformulaire=document.createElement('form')
            monformulaire.style.height='60%'
            let  choixmodule=document.createElement('label')
            choixmodule.innerHTML="<br>MODULE"    
            let meschoixmod=document.createElement('select')
            meschoixmod.id='choixmodule'
            meschoixmod.style.marginLeft='10%'
            meschoixmod.style.width='50%'

            for (let i=0;i<modules.length;i++){
                let mod = document.createElement('option')
                mod.text=modules[i]
                meschoixmod.appendChild(mod)
            }
            let  choixenseignant=document.createElement('label')
            choixenseignant.innerHTML=`<br><br>`+"Enseignant"
            let meschoixens=document.createElement('select')
            meschoixens.id='choixenseignant'
            meschoixens.style.marginLeft='09%'
            meschoixens.style.width='50%'

            for (let i=0;i<enseignant.length;i++){
                let ens = document.createElement('option')
                ens.text=enseignant[i]
                meschoixens.appendChild(ens)
            }
            let  choixensalle=document.createElement('label')
            choixensalle.innerHTML=`<br><br>`+"Salle"
            let meschoixsa=document.createElement('select')
            meschoixsa.id='choixsalle'
            meschoixsa.style.marginLeft='14%'
            meschoixsa.style.width='50%'

            for (let i=0;i<salles.length;i++){
                let sal = document.createElement('option')
                sal.text=salles[i]
                meschoixsa.appendChild(sal)
            }
            let  choixhd=document.createElement('label')
            choixhd.innerHTML=`<br><br>`+"HeureDebut"
            
        
            let meschoixhd=document.createElement('select')
            meschoixhd.id='choixheuredebut'
            meschoixhd.style.marginLeft='07%'
            meschoixhd.style.width='50%'

            for (let i=8;i<=16;i++){
                let heuredebut = document.createElement('option')
        
                heuredebut.text=i+"H"
        
                meschoixhd.appendChild(heuredebut)
            }
            let  choixhf=document.createElement('label')
            choixhf.innerHTML=`<br><br>`+"HeureFin"
            let meschoixhf=document.createElement('select')
            meschoixhf.id='choixheurefin'
            meschoixhf.style.marginLeft='09%'
            meschoixhf.style.width='50%'

            for (let i=9;i<=17;i++){
                let heurefin= document.createElement('option')
                heurefin.text=i+"H"
                meschoixhf.appendChild(heurefin)
            }
            let pied=document.createElement('div')
            let ajouter=document.createElement('button')
            ajouter.innerHTML='AJOUTER'
            ajouter.id='ajouter'
            ajouter.type='submit'
           
            let annuler=document.createElement('button')
            annuler.innerHTML='ANNULER'
            annuler.id='annuler'
            ajouter.style.width='20%'
            ajouter.style.marginRight='20%'
            ajouter.style.marginTop='3%'


            annuler.style.width='20%'
            annuler.style.marginRight='20%'
            annuler.style.marginTop='3%'


            pied.style.width='100%'
            pied.style.height='20%'
        
            pied .style.backgroundColor='black'
          
           monformulaire.style.backgroundColor='rgba(64, 61,62, 0.9)'
           monformulaire.style.color='white'
          
        
            pied.appendChild(ajouter)
            pied.appendChild(annuler)
            monformulaire.appendChild(choixmodule)
            monformulaire.appendChild(meschoixmod)
            monformulaire.appendChild(choixenseignant)
            monformulaire.appendChild(meschoixens)
            monformulaire.appendChild(choixensalle)
            monformulaire.appendChild(meschoixsa)
            monformulaire.appendChild(choixhd)
            monformulaire.appendChild(meschoixhd)
            monformulaire.appendChild(choixhf)
            monformulaire.appendChild(meschoixhf)
           
            conteneur.appendChild(monformulaire)
            conteneur.appendChild(pied)
            //conteneur.appendChild(annuler)
            
        
            conteneur.style.top='20%'
            
            conteneur.style.position='absolute'
            document.getElementById('droite').appendChild(conteneur) 
            conteneur.style.display='none'
//RECUPERATION DES ELEMNTS DE MON FORMULAIRE
            let vm=''
            let ve=''
            let vs=''
            let vd=''
            let vf=''
            document.querySelector('#choixmodule').addEventListener('change',(event)=>{
                vm=event.target.value
               
        
            })
            document.getElementById('choixenseignant').addEventListener('change',(event)=>{
                ve=event.target.value
                
        
            })
            document.getElementById('choixsalle').addEventListener('change',(event)=>{
                vs=event.target.value
               
        
            })
            document.getElementById('choixheuredebut').addEventListener('change',(event)=>{
                vd=event.target.value
                vd=vd.replace('H','')
                vd=parseInt(vd)    
        
            })
            document.getElementById('choixheurefin').addEventListener('change',(event)=>{
                vf=event.target.value
                vf=vf.replace('H','')
                vf=parseInt(vf)  
            })
// AFFICHAGE DU FORMULAIRE AU CLIC D'UN BOUTON +
var identifiant=''
document.getElementById('selection').addEventListener('change',(event)=>{
    let nomclasse=event.target.value
    if (classes.includes(nomclasse)){

    allbouton.forEach(i=>{
        i.addEventListener('click',()=>{
            identifiant=i.id
            
            conteneur.style.display='block'
            
        })

    })
    document.getElementById('annuler').addEventListener('click',()=>{
        conteneur.style.display='none'

        
        })
        document.getElementById('ajouter').addEventListener('click',()=>{
            conteneur.style.display='none'
            d={e:ve,c:nomclasse,m:vm,s:vs,heured:vd,heuref:vf}
            info.push(d)
            console.log(info)
           b=creationdiv(d)
           b.style.backgroundColor='teal'

           //POUR LUNDI 
           if (identifiant=='j1'){
            if ((d.e==info[0].e && d.heured==info[0].heured && d.heuref==info[0].heuref) |(d.e==info[2].e && d.heured==info[2].heured && d.heuref==info[2].heuref) ) {
                conteneur.style.display='block'
                entete.innerHTML=`<h3>Modal title: Aly nest pas disponible les lundi entre 9h et 12h</h3>`
                info.pop(d)
                console.log(info)
            }
            else{
                document.querySelector('.lg1').appendChild(b)
            } 
            }
            //AJOUT MARDI
            if (identifiant=='j2'){
            document.querySelector('.lg2').appendChild(b)}

            // POUR MERCREDI
            if (identifiant=='j3'){
                if (d.e==info[1].e && d.heured==info[1].heured && d.heuref==info[1].heuref){
                conteneur.style.display='block'
                entete.innerHTML=`<h3>Modal title: Aly nest pas disponible MERCREDI entre 15h et 17h</h3>`
                info.pop(d)
                }
                else{
                    document.querySelector('.lg3').appendChild(b)
                }
                }
            //POUR JEUDI
            if (identifiant=='j4'){
                if(d.e==info[3].e && d.heured==info[3].heured && d.heuref==info[3].heuref) {
                    conteneur.style.display='block'
                   entete.style.color='red'
                    entete.innerHTML=`<h3>Modal title: Mbaye nest pas disponible le Jeudi entre 8h et 10h</h3>`
                    info.pop(d)
                }
                else{
                    document.querySelector('.lg4').appendChild(b)
                }
                }
            //POUR VENDREDI 
            if (identifiant=='j5'){
                document.querySelector('.lg5').appendChild(b)}
            //POUR SAMEDI 
            if (identifiant=='j6'){
                document.querySelector('.lg6').appendChild(b)}

           
        })
        

    }

})


 