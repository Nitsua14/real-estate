#![no_std]
use soroban_sdk::{contractimpl, symbol, vec, Env, Symbol, Vec};

pub struct RealEstateContract;

#[contractimpl]
impl RealEstateContract {
    
    pub fn purchase(env: Env, buyer: Symbol, seller: Symbol, price: u64) -> Vec<Symbol> {
        
        let buyer_balance = env.get_balance(&buyer);
        if buyer_balance < price {
            return vec![symbol!("Insufficient funds"), buyer_balance];
        }

       
        let property_owner = get_property_owner();
        if property_owner != seller {
            return vec![symbol!("Seller does not own the property"), property_owner];
        }

        
        env.transfer(&buyer, &seller, price);

        
        update_ownership_records(&buyer, &seller); 

        
        vec![symbol!("Purchase successful"), buyer, seller, price]
    }
}


fn get_property_owner() -> Symbol {
   
    symbol!("Austin Parge")
}

fn update_ownership_records(buyer: &Symbol, seller: &Symbol) {
    
    println!("Ownership updated: {} now owns the property", buyer);
}
