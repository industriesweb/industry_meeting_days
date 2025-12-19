import React from "react";

export default function RegistrationEmail({ fullname = "" }) {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; padding: 10px;">
      <div style="max-width: 600px; width: 100%; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        
        <div style="background: linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%); padding: 25px 20px; text-align: center; color: #ffffff;position:relative;">
          <h1 style="font-size: clamp(18px, 5vw, 24px); font-weight: 700; letter-spacing: 0.5px; margin: 0; line-height: 1.3;z-index:10;position:relative">FORUM MAROCAIN DE L'EMPLOI<br>& DE LA COMPÉTENCE</h1>
        </div>
        
        <div style="padding: 25px 20px; color: #333333; line-height: 1.7;">
          <p style="font-size: 17px; color: #4a148c; margin-bottom: 18px; font-weight: 600;">Bonjour ${fullname} ,</p>
          
          <p style="font-size: 15px; margin-bottom: 20px; color: #555555;">
Merci d’avoir complété votre inscription au Forum Marocain de l’Emploi et de la Compétence – FMEC 2025.
          </p>
          <p style="font-size: 15px; margin-bottom: 20px; color: #555555;">
Nous confirmons votre participation et avons bien enregistré votre demande.
          </p>
          <p style="font-size: 15px; margin-bottom: 20px; color: #555555;">
Notre équipe vous contactera prochainement avec l’ensemble des informations pratiques.
          </p>
          
          <div style="background-color: #f9f5ff; border-left: 4px solid #6a1b9a; padding: 15px; margin: 20px 0; border-radius: 4px; font-weight:600;color:black;">
🗓️ Rendez-vous le <span style="color:#6a1b9a;"> 23 décembre 2025 </span> au Carré d’Or – Casablanca,
pour une journée exceptionnelle dédiée à l’emploi, aux compétences et aux opportunités professionnelles au Maroc.
          </div>
          
          <p style="font-size: 15px; margin-bottom: 20px; color: #555555;">
            Vous recevrez prochainement tous les détails de l'événement.
          </p>
          
          <p style="margin-top: 20px; font-size: 14px; margin-bottom: 20px; color: #555555;">
            À très bientôt,            <br>
            <strong style="color: #4a148c;">L’équipe FMEC 2025
</strong>
          </p>
        </div>
        
        <div style="background-color: #4a148c; color: #ffffff; padding: 20px 15px; text-align: center; font-size: 13px;">
          <p style="margin-bottom: 5px; opacity: 0.9;"><strong>Forum Marocain de l'Emploi & de la Compétence</strong></p>
          <p style="margin-bottom: 5px; opacity: 0.9; word-break: break-all;">contact@industries.ma</p>
          <p style="margin-top: 10px; font-size: 11px; opacity: 0.7;">© 2025 Tous droits réservés</p>
        </div>
        
      </div>
    </div>
  `;
}
